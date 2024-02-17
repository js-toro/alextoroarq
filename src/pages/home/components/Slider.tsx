'use client';
import Image from 'next/image';

import { SliderContainer, ProjectName } from '@/styles/pages/home';

import { useHighlightedProjects } from '@/hooks';
import { IHighlightedProject } from '@/models';
import { useState, useEffect } from 'react';

export default function Slider() {
	const projects = useHighlightedProjects();

	const [currentProject, setCurrentProject] = useState<IHighlightedProject>(
		projects[0]
	);

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
		}, 10000);

		// Limpieza del intervalo al desmontar el componente
		return () => clearInterval(interval);
	}, [currentProject, projects]);

	return (
		<>
			<div className="absolute inset-0 size-full">
				{projects.map((project, index) => (
					<Image
						key={index}
						className={`absolute inset-0 size-full object-cover transition-opacity ${
							project.id === currentProject.id ? 'opacity-100' : 'opacity-0'
						}`}
						src={project.mainLandscapeImage}
						alt={`Hermosa vista de ${project.name}, un proyecto de Alex Toro Arquitectos`}
						width={1920}
						height={1080}
					/>
				))}
			</div>

			<SliderContainer className="relative z-10 size-full flex flex-col justify-between">
				<div className="my-auto flex justify-between">
					<button onClick={handlePreviousProject}>
						<Image
							src={'/assets/icons/SliderLeftButton.svg'}
							alt="Botón de paginación del slider"
							width={100}
							height={100}
							draggable={false}
						/>
					</button>

					<button onClick={handleNextProject}>
						<Image
							src={'/assets/icons/SliderRightButton.svg'}
							alt="Botón de paginación del slider"
							width={100}
							height={100}
							draggable={false}
						/>
					</button>
				</div>

				<ProjectName>{currentProject.name}</ProjectName>
			</SliderContainer>
		</>
	);
}
