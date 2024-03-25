import Link from "next/link";
import Style from "./Projects.module.scss";
import Utils from "@/ui/theme/application/utils/Utils.module.scss";
import Image from "next/image";

const Projects = () => {
	return (
		<>
			<section className={`${Style.wrapper}`}>
				<div
					className={`${Utils.container} ${Utils.d_flex} ${Utils.flex_column}`}
				>
					<p className={`${Utils.text_italic}`}>
						Explora nuestra galería de proyectos, los cuales capturan la
						escencia de nuestro enfoque innovador. Cada obra refleja nuestro
						compromiso con la calidad, funcionalidad y estética contemporánea.
					</p>

					<Link
						className={`${Utils.button_outline_light} ${Utils.ml_auto} ${Utils.mt_sm}`}
						href="/portafolio"
					>
						Ver Portafolio
					</Link>
				</div>
			</section>

			<section className={`${Style.wrapper_projects}`}>
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
				</div>
			</section>

			<div className={`${Utils.container} ${Utils.d_flex}`}>
				<Link
					href="/portafolio"
					className={`${Utils.button_outline_light} ${Utils.ml_auto}`}
				>
					Ver todos
				</Link>
			</div>
		</>
	);
};

export default Projects;
