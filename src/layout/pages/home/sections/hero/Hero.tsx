import { useEffect, useMemo, useState } from "react";
import { useHighlightedProjects } from "src/hooks";
import { IHighlightedProject } from "src/models";

import { Slider, Splash, BackgroundImage } from "./components";
import { HeroContainer } from "./styles";

export const Hero = () => {
	const maxTime = 5000;
	const [isSplashVisible, setIsSplashVisible] = useState(true); // Estado para controlar la visibilidad de Splash

	const projects = useHighlightedProjects();

	const orderedProjects = useMemo(() => {
		const firstProject = projects.find((project) => project.id === 1491);
		const otherProjects = projects.filter((project) => project.id !== 1491);
		const orderedProjects = otherProjects.sort(() => Math.random() - 0.5);
		orderedProjects.unshift(firstProject as any);
		return orderedProjects;
	}, [projects]);

	const [currentProject, setCurrentProject] = useState<IHighlightedProject>(
		orderedProjects[0]
	);

	// Manejador para el siguiente proyecto
	const handleNextProject = () => {
		const currentIndex = orderedProjects.indexOf(currentProject);

		// Calculando el índice del siguiente proyecto
		const nextIndex =
			currentIndex + 1 < orderedProjects.length ? currentIndex + 1 : 0;
		setCurrentProject(orderedProjects[nextIndex]);
	};

	// Manejador para el proyecto anterior
	const handlePreviousProject = () => {
		const currentIndex = orderedProjects.indexOf(currentProject);

		// Calculando el índice del proyecto anterior
		const previousIndex =
			currentIndex - 1 >= 0 ? currentIndex - 1 : orderedProjects.length - 1;
		setCurrentProject(orderedProjects[previousIndex]);
	};

	// Efecto para cambiar el proyecto actual cada cierto tiempo
	useEffect(() => {
		const interval = setInterval(() => {
			const currentIndex = orderedProjects.indexOf(currentProject);
			const nextIndex =
				currentIndex + 1 < orderedProjects.length ? currentIndex + 1 : 0;
			setCurrentProject(orderedProjects[nextIndex]);
		}, maxTime * 2);

		// Limpieza del intervalo al desmontar el componente
		return () => clearInterval(interval);
	}, [currentProject, orderedProjects]);

	// Efecto para ocultar Splash después de un cierto tiempo
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsSplashVisible(false);
		}, maxTime);

		// Limpieza del temporizador al desmontar el componente
		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		<HeroContainer>
			<BackgroundImage
				projects={orderedProjects}
				currentProjectID={currentProject.id}
			/>

			{/* Renderizado condicional de Splash y Slider */}
			{isSplashVisible && <Splash maxTime={maxTime} />}
			{!isSplashVisible && (
				<Slider
					currentProject={currentProject}
					handleNextProject={handleNextProject}
					handlePreviousProject={handlePreviousProject}
				/>
			)}
		</HeroContainer>
	);
};
