import Link from "next/link";

import Styles from "./Otros.module.scss";
import Utils from "@/ui/theme/application/utils/Utils.module.scss";

import { useProjectApplication } from "@/application";
import { IProject } from "@/domain/interfaces";
import { Category } from "@/domain/enums";

export default function Otros() {
	const { isLoading, filterByCategory } = useProjectApplication();

	return (
		<section className={`${Styles.section}`}>
			<div className={`${Utils.container} ${Styles.category}`}>
				<p>
					Con el honesto propósito de dar a conocer la labor que venimos
					realizando como arquitectos, hemos recopilado, con orgullo y
					satisfacción, en este album gráfico, los diseños de Hoteleria y Otros
					más representativos.
				</p>
			</div>

			{!isLoading && (
				<div className={`${Styles.projects}`}>
					{filterByCategory(Category.Otros)?.map((project: IProject) => (
						<div key={project.id}>
							<Link
								href={`/portafolio/${project.id}`}
								className={`${Utils.link_outline_off}`}
							>
								<img
									src={project.thumb}
									alt={`Hermosa vista de ${project.name}, un proyecto de ${project.category} de Alex Toro Arquitectos.`}
									loading="lazy"
								/>

								<p className={`${Utils.text_center} ${Utils.mt_sm}`}>
									{project.name}
								</p>
							</Link>
						</div>
					))}
				</div>
			)}
		</section>
	);
}
