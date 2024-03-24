import Style from './Welcome.module.scss';
import Utils from '@/ui/theme/application/utils/Utils.module.scss';

const Welcome = () => {
	return (
		<section className={`${Style.section}`}>
			<div className={`${Utils.container}`}>
				<p className={`${Utils.text_italic}`}>
					¡Bienvenido a Alex Toro Arquitectos!... Somos líderes en el diseño arquitectónico de
					viviendas multifamiliares, con una sólida travectoria de 23 años y más de 150 proyectos
					exitosos.
				</p>
			</div>
		</section>
	);
};

export default Welcome;
