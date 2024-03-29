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
							project.order === currentProject.order ? Styles.highlightedProjectActive : ''
						}`}
						src={project.mainLandscapeImage}
						alt={`Una hermosa vista de ${project.name}, un proyecto de Alex Toro Arquitectos`}
						width={3200}
						height={1800}
					/>
				))}
			</div>

			<div className={Styles.grid}>
				<div className={`${Styles.left_button}`}>
					<button className={`${Styles.controllButton} `} onClick={handlePreviousProject}>
						<HiArrowLeft />
					</button>
				</div>

				<div className={`${Styles.right_button}`}>
					<button className={`${Styles.controllButton}`} onClick={handleNextProject}>
						<HiArrowRight />
					</button>
				</div>

				<div className={`${Styles.title}`}>
					<span>Arquitectos Especialistas en Vivienda Multifamiliar</span>
				</div>
			</div>
		</>
	);
};

export default Slider;
