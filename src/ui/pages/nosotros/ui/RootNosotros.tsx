"use client";

import { useLayoutEffect } from "react";
import Image from "next/image";
import Styles from "./RootNosotros.module.scss";
import Utils from "@/ui/theme/application/utils/Utils.module.scss";

const RootNosotros = () => {
	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<section className={`${Styles.cover_wrapper}`}>
				<div>
					<Image
						className={`${Styles.cover}`}
						src="/assets/images/nosotros/banner-nosotros.jpg"
						alt="Una hermosa vista de Medellín, cerca de un proyecto de Alex Toro Arquitectos"
						width={1920}
						height={720}
						sizes="100vw"
						quality={70}
						style={{
							height: "auto",
						}}
						priority
					/>
				</div>

				<div className={Styles.grid}>
					<div className={`${Styles.title}`}>
						<div>
							<h4>Nosotros</h4>
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
						<h3 className={`${Utils.text_light}`}>Historia</h3>
					</div>

					<div>
						<p>
							Alex Toro Arquitectos es una firma fundada en Medellín en el año
							1998, dando sus primeros pasos con el encargo del proyecto “Portón
							de San Pedro y San Pablo”. Desde entonces nos hemos dedicado
							exclusivamente al diseño arquitectónico, enfocándonos
							especialmente en el campo de la{" "}
							<strong>vivienda multifamiliar.</strong>
						</p>

						<p>
							Nuestros primeros proyectos se centraron en el sector de laureles,
							donde adquirimos un alto grado de experiencia en el diseño de
							viviendas para estrato 5, en lotes entre medianeros;
							posteriormente, hemos expandido nuestra presencia a otras áreas de
							la ciudad, incluyendo El Poblado, Bello y Envigado, enfrentándonos
							a desafíos y oportunidades en lotes más amplios y diversos
							contextos urbanos.
						</p>

						<p>
							Nuestros primeros proyectos se centraron en el sector de laureles,
							donde adquirimos un alto grado de experiencia en el diseño de
							viviendas para estrato 5, en lotes entre medianeros;
							posteriormente, hemos expandido nuestra presencia a otras áreas de
							la ciudad, incluyendo El Poblado, Bello y Envigado, enfrentándonos
							a desafíos y oportunidades en lotes más amplios y diversos
							contextos urbanos.
						</p>
					</div>

					<div className={`${Styles.image}`}>
						<Image
							src="/assets/images/nosotros/nosotros-1.jpg"
							alt="Una hermosa vista de un render para un proyecto de Alex Toro Arquitectos"
							width={1100}
							height={395}
							sizes="100vw"
							quality={70}
							style={{
								height: "auto",
							}}
						/>
					</div>

					<div>
						<h3 className={`${Utils.text_light}`}>Filosofía</h3>
					</div>

					<div>
						<p>
							Con un enfoque basado en la responsabilidad social y el compromiso
							con nuestra profesión, en Alex Toro Arquitectos nos esforzamos por
							ofrecer diseños innovadores, sostenibles y óptimos desde el punto
							de vista técnico, estético y funcional. hemos priorizado la
							capacitación continua y la adopción de tecnologías de vanguardia
							para asegurar la creación de proyectos que satisfacen tanto las
							expectativas de los promotores como las necesidades de los
							compradores.
						</p>
					</div>

					<div>
						<h3 className={`${Utils.text_light}`}>Valores</h3>
					</div>

					<div>
						<p className={`${Styles.p_values}`}>
							Cuando eliges trabajar con nosotros, puedes esperar:
						</p>

						<ul
							className={`${Styles.list} ${Utils.text_italic} ${Utils.d_grid} ${Utils.gap_sm}`}
						>
							<li>
								<b>Transparencia:</b> Nos comprometemos a establecer un plan de
								trabajo claro y realista, con metas definidas y plazos
								alcanzables.
							</li>

							<li>
								<b>Profesionalismo:</b> Abordamos cada tarea con criterio y
								seriedad, cumpliendo con los plazos y actividades acordados.
							</li>

							<li>
								<b>Comunicación efectiva:</b> Estamos disponibles para escuchar
								tus ideas y necesidades, y nos esforzamos por mantener una
								comunicación abierta y directa en todo momento.
							</li>

							<li>
								<b>Flexibilidad y Sencillez:</b> Valoramos tus opiniones y
								respetamos tus preferencias, adaptando nuestros servicios para
								satisfacer tus necesidades específicas sin imponer una marca o
								un estilo.
							</li>

							<li>
								<b>Soluciones Prácticas y Construibles:</b> Nuestros diseños no
								solo son innovadores y estéticamente atractivos, sino también
								totalmente realizables y funcionales, brindando soluciones
								integrales a tus requerimientos arquitectónicos.
							</li>
						</ul>
					</div>

					<div className={`${Styles.image}`}>
						<Image
							src="/assets/images/nosotros/nosotros-2.jpg"
							alt="Una hermosa vista de un render, un proyecto de Alex Toro Arquitectos"
							width={1080}
							height={608}
							sizes="100vw"
							quality={70}
							style={{
								height: "auto",
							}}
						/>
					</div>

					<div>
						<h3 className={`${Utils.text_light}`}>Experiencia</h3>
					</div>

					<div>
						<p>
							Con más de dos décadas de experiencia en el sector de la
							arquitectura, Alex Toro Arquitectos ha establecido un legado
							sólido y confiable en el diseño de viviendas multifamiliares.
							Desde nuestra fundación hace 25 años, hemos liderado la
							planificación, diseño y acompañamiento en la construcción de más
							de 150 edificios residenciales, abarcando alrededor de 650.000
							metros cuadrados y ofreciendo más de 300 tipos de apartamentos en
							diversas ubicaciones y contextos urbanos. Esta amplia trayectoria
							nos ha permitido acumular un profundo conocimiento y comprensión
							de los desafíos y oportunidades presentes en el desarrollo
							inmobiliario. Nos enorgullece demostrar el profesionalismo que nos
							proyecta como una de las firmas más destacadas del medio, mientras
							continuamos afinando nuestras habilidades en la creación de
							espacios habitables que combinan funcionalidad, estética y
							sostenibilidad.
						</p>
					</div>

					<div>
						<h3 className={`${Utils.text_light}`}>Clientes</h3>
					</div>

					<div>
						<p>
							Nuestros Clientes pueden dar fé del profesionalismo con el que
							hemos abordado sus proyectos. Agradecemos la confianza de clientes
							destacados como Inversiones y Construcciones Prisma, Grupo San
							Remo, Constructores Turipaná, Constructora Borinquen,
							Construcciones Serbia, Constructora Belarrú, Constructora Guigo,
							Constructora Agaciviles, Bienes y Bienes, etc. Sus proyectos son
							testimonio de nuestra dedicación y calidad en cada colaboración.
						</p>
					</div>

					<div />

					<div className={`${Styles.logos}`}>
						<div className={`${Styles.image}`}>
							<Image
								src="/assets/images/nosotros/nosotros-logos.png"
								alt="Logos de los clientes de Alex Toro Arquitectos"
								width={1080}
								height={100}
								sizes="100vw"
								quality={70}
								draggable={false}
								style={{
									height: "auto",
								}}
							/>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default RootNosotros;
