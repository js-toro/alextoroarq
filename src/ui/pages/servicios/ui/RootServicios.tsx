"use client";
import { Fragment, useLayoutEffect } from "react";
import Image from "next/image";

import Styles from "./RootServicios.module.scss";
import Utils from "@/ui/theme/application/utils/Utils.module.scss";

export default function RootServicios(): JSX.Element {
	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<Fragment>
			<section className={`${Styles.cover_wrapper}`}>
				<div>
					<Image
						className={`${Styles.cover}`}
						src="/assets/images/servicios/banner-servicios.jpg"
						alt="Una hermosa vista de un render para un proyecto de Alex Toro Arquitectos"
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
							<h4>Servicios</h4>
						</div>
					</div>

					<div className={`${Styles.subtitle}`}>
						<span>Somos una firma especializada en Vivienda Multifamiliar</span>
					</div>
				</div>
			</section>

			<main className={`${Styles.section}`}>
				<div className={`${Utils.container} ${Styles.servicios}`}>
					<p className={`${Utils.text_italic}`}>
						Descubre cómo transformamos ideas en realidades habitables. En Alex
						Toro Arquitectos, nos especializamos en ofrecer soluciones
						integrales que abarcan todas las etapas del proceso arquitectónico.
						Desde la concepción inicial hasta la entrega final, nuestro equipo
						trabaja en estrecha colaboración contigo para garantizar que tu
						visión se convierta en una realidad tangible y satisfactoria.
					</p>

					<h3 className={`${Utils.text_light}`}>Diseño Arquitectónico:</h3>

					<p className={`${Utils.text_italic}`}>
						Nuestro enfoque contemporáneo en el diseño arquitectónico se
						caracteriza por la innovación, la funcionalidad y el cuidado
						estético. Cada proyecto es único y personalizado para satisfacer las
						necesidades específicas de nuestros clientes. Desde complejos
						residenciales hasta viviendas unifamiliares, nuestro objetivo es
						crear espacios que no solo sean visualmente impresionantes, sino
						también prácticos y cómodos para vivir.
					</p>

					<div className={`${Styles.image}`}>
						<Image
							src="/assets/images/servicios/servicios.jpg"
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

					<h3 className={`${Utils.text_light}`}>Modelado BIM:</h3>

					<p className={`${Utils.text_italic}`}>
						El modelado de información de construcción (BIM) es una herramienta
						fundamental en nuestro proceso de diseño. Utilizamos la tecnología
						BIM para crear modelos tridimensionales detallados de tus proyectos,
						lo que permite una visualización precisa y una planificación
						eficiente. Esta metodología nos permite identificar y resolver
						posibles problemas de diseño antes de que comience la construcción,
						lo que resulta en un proceso más fluido y costos reducidos para
						nuestros clientes.
					</p>

					<h3 className={`${Utils.text_light}`}>
						Visualización Arquitectónica:
					</h3>

					<p className={`${Utils.text_italic}`}>
						En Alex Toro Arquitectos, entendemos la importancia de la
						visualización arquitectónica en la comunicación de ideas y
						conceptos. Nuestro equipo de expertos en renderización trabaja para
						dar vida a tus ideas a través de imágenes realistas y cautivadoras.
						Desde perspectivas exteriores hasta recorridos virtuales, nuestras
						visualizaciones arquitectónicas te permiten experimentar la esencia
						y el potencial de cada proyecto antes de que se convierta en
						realidad, garantizando una toma de decisiones informada y
						satisfactoria.
					</p>

					<iframe
						src="https://alextoroarq.github.io/360Crystal_Mastersuite1/"
						width={1080}
						height={608}
						className={`${Styles.iframe}`}
						allowFullScreen
					/>
				</div>
			</main>
		</Fragment>
	);
}
