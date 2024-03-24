import Link from 'next/link';
import Style from './Projects.module.scss';
import Utils from '@/ui/theme/application/utils/Utils.module.scss';
import Image from 'next/image';

const Projects = () => {
	return (
		<>
			<section className={`${Style.wrapper}`}>
				<div className={`${Utils.container}`}>
					<p className={`${Utils.text_italic}`}>
						<span>
							Explora nuestra galería de proyectos, los cuales capturan la escencia de nuestro
							enfoque innovador. Cada obra refleja nuestro compromiso con la calidad, funcionalidad
							y estética contemporánea.
						</span>{' '}
						<Link
							className={`${Utils.text_decoration_underline} ${Utils.link_outline_off}`}
							href="/portafolio">
							Ir a portafolio
						</Link>
					</p>
				</div>
			</section>

			<section className={`${Style.wrapper_projects}`}>
				<h3 className={`${Utils.text_center} ${Utils.mb_md}`}>Proyectos</h3>

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

							{/* <p className={`${Utils.text_center} ${Utils.mt_sm}`}>Crystal Living</p> */}
						</div>
					))}
				</div>
			</section>
		</>
	);
};

export default Projects;
