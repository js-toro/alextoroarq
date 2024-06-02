import Style from "./Welcome.module.scss";
import Utils from "@/ui/theme/application/utils/Utils.module.scss";

export default function Welcome(): JSX.Element {
	return (
		<section className={`${Style.section}`}>
			<div className={`${Utils.container}`}>
				<p className={`${Utils.text_italic}`}>
					¡Bienvenido a <strong>Alex Toro Arquitectos</strong>!... Somos líderes
					en el <em>diseño arquitectónico de viviendas multifamiliares</em>, con
					una sólida travectoria de 23 años y más de 150 proyectos exitosos en
					Medellín y su Área Metropolitana.
				</p>
			</div>
		</section>
	);
}
