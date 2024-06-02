import Image from "next/image";
import Link from "next/link";

import Styles from "./Otros.module.scss";
import Utils from "@/ui/theme/application/utils/Utils.module.scss";

import useScroll from "@/application/client/useScroll";
import useProject from "@/application/useProject";
import { IProject } from "@/domain/interfaces";
import { Category } from "@/domain/enums";

export default function Otros(): JSX.Element {
	const { isLoading, filterByCategory } = useProject();
	const { setCurrentScroll } = useScroll();

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
								onClick={() => setCurrentScroll(window.scrollY)}
							>
								<Image
									src={project.thumb}
									alt={`Hermosa vista de ${project.name}, un proyecto de ${project.category} de Alex Toro Arquitectos.`}
									width={300}
									height={510}
									sizes="100vw"
									quality={70}
									style={{
										height: "auto",
									}}
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
