"use client";
import Link from "next/link";
import { useState } from "react";

import Style from "./Projects.module.scss";
import Utils from "@/ui/theme/application/utils/Utils.module.scss";
import { useHighlightedProjects } from "@/application";
import { IProject } from "@/domain/interfaces";
import Image from "next/image";

const Projects = () => {
	const [showMore, setShowMore] = useState(false);
	const { isLoading, projects, handleShowMore } = useHighlightedProjects();

	if (isLoading) return <></>;

	return (
		<>
			<section className={`${Style.wrapper}`}>
				<div
					className={`${Utils.container} ${Utils.d_flex} ${Utils.flex_column} ${Utils.gap_sm}`}
				>
					<p className={`${Utils.text_italic}`}>
						Explora nuestra galería de proyectos, los cuales capturan la
						escencia de nuestro enfoque innovador. Cada obra refleja nuestro
						compromiso con la calidad, funcionalidad y estética contemporánea.
					</p>

					<Link
						className={`${Utils.button_outline_light} ${Utils.link_outline_off} ${Utils.ml_auto}`}
						href="/portafolio"
					>
						Ver Portafolio
					</Link>
				</div>
			</section>

			<section className={`${Utils.m_md} ${Utils.d_grid} ${Utils.gap_md}`}>
				<div className={`${Style.wrapper_projects}`}>
					<h2 className={`${Utils.text_center} ${Utils.mb_md}`}>
						Proyectos Destacados
					</h2>

					<div className={`${Style.projects}`}>
						{projects.map((project: IProject) => (
							<div key={project.id}>
								<Link
									href={`/portafolio/${project.id}`}
									className={`${Utils.link_outline_off}`}
								>
									<Image
										src={project.thumb}
										alt={`Hermosa vista de ${project.name}, un proyecto de ${project.category} de Alex Toro Arquitectos.`}
										width={320}
										height={544}
										sizes="100vw"
										quality={70}
										style={{
											width: "auto",
											height: "auto",
										}}
									/>

									<p className={`${Utils.text_center} ${Utils.mt_sm}`}>
										{project.name}
									</p>
								</Link>
							</div>
						))}
					</div>
				</div>

				<div
					className={`${Utils.container} ${Utils.size_full} ${Utils.d_flex}`}
				>
					{!showMore && (
						<button
							className={`${Utils.button_outline_light} ${Utils.ml_auto}`}
							onClick={() => {
								setShowMore(true);
								handleShowMore();
							}}
						>
							Ver Más
						</button>
					)}

					{showMore && (
						<Link
							href="/portafolio"
							className={`${Utils.button_outline_light} ${Utils.link_outline_off} ${Utils.ml_auto}`}
						>
							Ver Todos
						</Link>
					)}
				</div>
			</section>
		</>
	);
};

export default Projects;
