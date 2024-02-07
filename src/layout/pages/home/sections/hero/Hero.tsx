import { useEffect, useState } from "react";
import { useHighlightedProjects } from "src/hooks";
import { IHighlightedProject } from "src/models";

import { Slider, Splash, BackgroundImage } from "./components";
import { HeroContainer } from "./styles";

export const Hero = () => {
	const maxTime = 5000;
	const [isSplashVisible, setIsSplashVisible] = useState(true); // Estado para controlar la visibilidad de Splash

	const projects = useHighlightedProjects();
	const [currentProject, setCurrentProject] = useState<IHighlightedProject>(
		projects[0]
	);

	// Manejador para el siguiente proyecto
	const handleNextProject = () => {
		const currentIndex = projects.indexOf(currentProject);

		// Calculando el índice del siguiente proyecto
		const nextIndex = currentIndex + 1 < projects.length ? currentIndex + 1 : 0;
		setCurrentProject(projects[nextIndex]);
	};

	// Manejador para el proyecto anterior
	const handlePreviousProject = () => {
		const currentIndex = projects.indexOf(currentProject);

		// Calculando el índice del proyecto anterior
		const previousIndex =
			currentIndex - 1 >= 0 ? currentIndex - 1 : projects.length - 1;
		setCurrentProject(projects[previousIndex]);
	};

	// Efecto para cambiar el proyecto actual cada cierto tiempo
	useEffect(() => {
		const interval = setInterval(() => {
			const currentIndex = projects.indexOf(currentProject);
			const nextIndex =
				currentIndex + 1 < projects.length ? currentIndex + 1 : 0;
			setCurrentProject(projects[nextIndex]);
		}, maxTime * 2);

		// Limpieza del intervalo al desmontar el componente
		return () => clearInterval(interval);
	}, [currentProject, projects]);

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
				projects={projects}
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
