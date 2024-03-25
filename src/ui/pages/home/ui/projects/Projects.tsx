"use client";
import Link from "next/link";
import Style from "./Projects.module.scss";
import Utils from "@/ui/theme/application/utils/Utils.module.scss";
import Image from "next/image";
import { useState } from "react";

const Projects = () => {
	const [showMore, setShowMore] = useState(false);

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
						{[1, 2, 3, 4, 5, 6].map((_, index) => (
							<div key={index}>
								<Image
									src="/assets/images/highlighted-projects/142.jpg"
									alt="Demo"
									width={2160}
									height={2160}
									quality={70}
								/>

								<p className={`${Utils.text_center} ${Utils.mt_sm}`}>
									Crystal Living
								</p>
							</div>
						))}

						{showMore &&
							[1, 2, 3, 4, 5, 6].map((_, index) => (
								<div key={index}>
									<Image
										src="/assets/images/highlighted-projects/142.jpg"
										alt="Demo"
										width={2160}
										height={2160}
										quality={70}
									/>

									<p className={`${Utils.text_center} ${Utils.mt_sm}`}>
										Crystal Living
									</p>
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
							onClick={() => setShowMore(true)}
						>
							Ver Más
						</button>
					)}

					{showMore && (
						<Link
							href="/portafolio"
							className={`${Utils.button_outline_light} ${Utils.ml_auto}`}
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
