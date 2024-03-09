'use client';
import Image from 'next/image';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';
import { useHighlightedProjects } from '@/application';

import Styles from './Slider.module.scss';
import Utils from '@/ui/theme/application/utils/Utils.module.scss';

const Slider = () => {
	const { isLoaded, currentProject, projects, handlePreviousProject, handleNextProject } =
		useHighlightedProjects();

	if (!isLoaded) return <></>;

	return (
		<>
			<div
				className={`${Utils.background_tertiary} ${Utils.absolute} ${Utils.position_full} ${Utils.z_index_n100}`}>
				{projects.map((project, index) => (
					<Image
						key={index}
						className={`${Styles.highlightedProject} ${
							project.id === currentProject.id ? Styles.highlightedProjectActive : ''
						}`}
						src={project.mainLandscapeImage}
						alt={`Una hermosa vista de ${project.name}, un proyecto de Alex Toro Arquitectos`}
						width={3200}
						height={1800}
					/>
				))}
			</div>

			<div className={Styles.grid}>
				<button
					className={`${Styles.controllButton} ${Styles.left_button}`}
					onClick={handlePreviousProject}>
					<HiArrowLeft />
				</button>

				<button
					className={`${Styles.controllButton} ${Styles.right_button}`}
					onClick={handleNextProject}>
					<HiArrowRight />
				</button>

				<span className={Styles.title}>{currentProject.name}</span>
			</div>
		</>
	);
};

export default Slider;
