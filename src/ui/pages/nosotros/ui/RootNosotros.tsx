import Styles from './RootNosotros.module.scss';
import Utils from '@/ui/theme/application/utils/Utils.module.scss';

const RootNosotros = () => {
	return (
		<main>
			<section className={`${Styles.wrapper}`}>
				<div className={`${Utils.d_grid} ${Utils.gap_xxs}`}>
					<span className={`${Utils.text_heading}`}>
						<b>ACERCA DE</b>
					</span>

					<h3>Nosotros</h3>
				</div>

				<p>
					La mayoría de las grandes ciudades latinoamericanas ha experimentado, en las últimas
					décadas, cambios sustanciales en su perfil urbano. Los grandes cambios que trajo consigo
					la ciudad industrial, junto a la vertiginosa migración ocasionada por la violencia, por la
					búsqueda de mejores condiciones laborales y espacios más seguros para vivir, han hecho que
					la ciudad crezca y se transforme; Ante el encarecimiento y disminución de suelo
					urbanizable, la densificación del territorio se plantea como una solución a esta demanda.
					Es el periodo de los grandes bloques de edificios, de las torres de apartamentos, de la
					vivienda en propiedad horizontal… El Multifamiliar.
				</p>

				<p>
					En Alex Toro Arquitectos, hemos sido participes de este proceso. Nuestra trayectoria de
					más de 20 años ha sido marcada por el compromiso con la excelencia en el diseño de
					viviendas multifamiliares. Guiados por valores fundamentales como responsabilidad y
					eficiencia, hemos sumado alrededor de 150 proyectos de vivienda multifamiliar; apoyados en
					el conocimiento y tecnología adecuados, con el apoyo y asesoría técnica de los más
					calificados ingenieros de la ciudad y siguiendo además las premisas de cada promotor.{' '}
				</p>

				<p>
					Agradecemos la confianza de clientes destacados como Inversiones y Construcciones Prisma,
					Grupo San Remo, y Constructores Turipaná. Sus proyectos son testimonio de nuestra
					dedicación y calidad en cada colaboración.
				</p>

				<p>
					Explora nuestra galería de proyectos multifamiliares que capturan la esencia de nuestro
					enfoque innovador. Cada obra refleja nuestro compromiso con la calidad, funcionalidad y
					estética contemporánea.
				</p>
			</section>

			<section>
				<div className={`${Utils.d_grid} ${Utils.gap_xxs}`}>
					<span className={`${Utils.text_heading}`}>
						<b>DESCUBRE</b>
					</span>

					<h3>Nuestros servicios</h3>
				</div>
				<p>
					Descubre cómo transformamos ideas en realidades habitables. Nuestra oferta integral de
					servicios abarca tanto el diseño arquitectónico, como también el modelado BIM y la
					visualización arquitectónica.
				</p>

				<p>
					<b>Diseño Arquitectónico:</b>{' '}
					<span>
						Con un enfoque contemporáneo, creamos diseños multifamiliares competitivos, funcionales
						y estéticamente cuidadosos.
					</span>
				</p>

				<p>
					<b>Modelado BIM:</b>{' '}
					<span>
						Utilizamos la tecnología BIM para proporcionar una visión tridimensional integral de tus
						proyectos, optimizando la planificación y ejecución.
					</span>
				</p>

				<p>
					<b>Visualización Arquitectónica:</b>{' '}
					<span>
						Damos vida a tus ideas a través de visualizaciones arquitectónicas que capturan la
						esencia y el potencial de cada proyecto.
					</span>
				</p>
			</section>
		</main>
	);
};

export default RootNosotros;
