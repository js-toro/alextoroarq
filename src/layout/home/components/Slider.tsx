'use client';
import Image from 'next/image';

import { useHighlightedProjects } from '@/hooks';
import { SliderContainer, ProjectName } from '@/styles/layout/home';

export default function Slider() {
	const [
		isLoaded,
		projects,
		currentProject,
		currentIndex,
		handleNextProject,
		handlePreviousProject,
	] = useHighlightedProjects();

	return (
		<>
			<div className="absolute inset-0 size-full">
				{isLoaded &&
					projects.map((project, index) => (
						<Image
							key={index}
							className={`absolute inset-0 size-full object-cover brightness-90 transition-opacity ${
								index === currentIndex ? 'opacity-100' : 'opacity-0'
							}`}
							src={project.mainLandscapeImage}
							alt={`Hermosa vista de ${project.name}, un proyecto de Alex Toro Arquitectos`}
							width={3200}
							height={1800}
						/>
					))}
			</div>

			<SliderContainer className="relative z-10 size-full pt-16 flex flex-col justify-between">
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

				<ProjectName>{isLoaded && currentProject.name}</ProjectName>
			</SliderContainer>
		</>
	);
}
