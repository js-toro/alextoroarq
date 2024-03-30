import Styles from "./RootNosotros.module.scss";
import Utils from "@/ui/theme/application/utils/Utils.module.scss";

import ContactForm from "@/ui/pages/contactanos/ui/contactForm";

const RootNosotros = () => {
	return (
		<>
			<section className={`${Styles.cover_wrapper}`}>
				<div>
					<img
						className={`${Styles.cover}`}
						src={"/assets/images/nosotros/banner-nosotros.jpg"}
						alt={`Una hermosa vista de xxx, un proyecto de Alex Toro Arquitectos`}
					/>
				</div>

				<div className={Styles.grid}>
					<div className={`${Styles.title}`}>
						<div>
							<h4>La Firma</h4>
						</div>
					</div>

					<div className={`${Styles.subtitle}`}>
						<span>Somos una firma especializada en Vivienda Multifamiliar</span>
					</div>
				</div>
			</section>

			<main className={`${Styles.section} `}>
				<div className={`${Utils.container} ${Styles.nosotros}`}>
					<div>
						<h3 className={`${Utils.text_light}`}>Contexto</h3>
					</div>

					<div>
						<p>
							Medellín, como la mayoría de las ciudades latinoamericanas ha
							tenido que crecer y transformarse para atender la demanda de la
							creciente poblacion. Ante el encarecimiento y disminución de suelo
							habitable, Las ciudades han tenido que optar por crecer en
							altura... es en este contexto donde la{" "}
							<strong>Vivienda Multifamiliar</strong> surge como solución a esta
							demanda.
						</p>
					</div>

					<div>
						<h3 className={`${Utils.text_light}`}>Nosotros</h3>
					</div>

					<div>
						<p>
							En Alex Toro Arquitectos, hemos sido partícipes de este proceso...
							En nuestra trayectoria de mas de 20 años, el equipo de trabajo, ha
							buscado que sus proyectos de vivienda multifamiliar se destaquen
							como diseños óptimos, desde el punto de vista técnico, estético y
							funcional; Guiados además, por valores fundamentales, como
							responsabilidad, eficiencia y compromiso con la profesión,
							obteniendo, de este modo, una gran aceptación por parte de
							compradores y promotores.
						</p>
					</div>

					<div className={`${Styles.mobileImage}`}>
						<img
							src={"/assets/images/nosotros/nosotros-1.jpg"}
							alt={`Una hermosa vista de xxx, un proyecto de Alex Toro Arquitectos`}
							loading="lazy"
						/>
					</div>

					<div>
						<h3 className={`${Utils.text_light}`}>Experiencia</h3>
					</div>

					<div>
						<p>
							En nuestra trayectoria de más de 20 años, hemos acumulado en
							nuestro portafolio, más de 150 edificios, al rededor de 650.000 m2
							y más de 300 tipos de apartamentos. demostrando así el
							profesionalismo que nos proyecto como una de las firmas más
							destacadas del medio.
						</p>
					</div>

					<div>
						<h3 className={`${Utils.text_light}`}>Servicios</h3>
					</div>

					<div>
						<p>
							En Alex Toro Arquitectos transfromamos ideas en realidades
							habitables. Nuestra oferta integral de servicios abarca tanto el
							diseño arquitectónico, como también el modelado BIM y la
							visualizacion arquitectónica.
						</p>

						<p>
							Diseño Arquitectónico: Con un enfoque contemporáneo, creamos
							diseños multifamiliares competitivos, funcionales y estéticamento
							cuidadosos.
						</p>

						<p>
							Modelado BIM: Utilizamos la tecnología BIM para proporcionar una
							visión tridimensional integral de nuestros proyectos, optimizando
							la planificación y ejecución.
						</p>

						<p>
							Visualización Arquitectónica: Damos vida a los proyectos a través
							de imágenes tridimensionales, videos y recorridos virtuales, con
							calidad fotorealista, capturando la esencia y el potencial de cada
							proyecto.
						</p>
					</div>

					<div className={`${Styles.mobileImage}`}>
						<img
							src={"/assets/images/nosotros/nosotros-2.jpg"}
							alt={`Una hermosa vista de xxx, un proyecto de Alex Toro Arquitectos`}
							loading="lazy"
						/>
					</div>

					<div>
						<h3 className={`${Utils.text_light}`}>Clientes</h3>
					</div>

					<div>
						<p>
							Nuestros clientes pueden dar fé del profesionalismo con el que
							abordamos sus proyectos. Agradecemos la confianza de clientes
							destacados como: Invesiones y Construcciones Prisma, Grupo San
							Remo, Constructora Borinquen, Grupo Turipaná, Constructora
							Belarrú, Constructora Guigo, Agaciviles, Bienes y Bienes, etc.
						</p>

						<p>
							Sus proyectos son Testimonio de muestra dedicación y calidad en
							cada colaboración.
						</p>
					</div>
				</div>
			</main>

			<section>
				<ContactForm />
			</section>
		</>
	);
};

export default RootNosotros;
