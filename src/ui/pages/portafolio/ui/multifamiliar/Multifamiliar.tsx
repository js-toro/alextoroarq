import Styles from "./Multifamiliar.module.scss";
import Utils from "@/ui/theme/application/utils/Utils.module.scss";

export default function Multifamiliar() {
	return (
		<section className={`${Styles.section}`}>
			<div className={`${Utils.container} ${Styles.category}`}>
				<p>
					Con el honesto propósito de dar a conocer la labor que venimos
					realizando como arquitectos, hemos recopilado, con orgullo y
					satisfacción, en este album gráfico, las obras más representativas de
					Alex Toro Arquitectos.
				</p>
			</div>

			<div className={`${Styles.projects}`}>
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
					<div key={index}>
						<img
							src="/assets/images/nosotros/nosotros-1.jpg"
							alt="Demo"
							loading="lazy"
						/>

						<p className={`${Utils.text_center} ${Utils.mt_sm}`}>
							Crystal Living
						</p>
					</div>
				))}
			</div>
		</section>
	);
}
