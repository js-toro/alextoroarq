"use client";
import { Fragment } from "react";
import Image from "next/image";

import Styles from "./RootPortafolio.module.scss";

import { Category } from "@/domain/enums";
import useScroll from "@/application/client/useScroll";
import useProjectLayout from "@/ui/pages/portafolio/application";

import Multifamiliar from "./multifamiliar";
import Unifamiliar from "./unifamiliar";
import Otros from "./otros";
import FullProjects from "./fullProjects";

export default function RootPortafolio(): JSX.Element {
	const { scroll, category, setCategory } = useScroll();
	const { banner } = useProjectLayout(scroll, category);

	return (
		<Fragment>
			<section className={`${Styles.cover_wrapper}`}>
				<div>
					<Image
						className={`${Styles.cover}`}
						src={banner}
						alt="Una hermosa vista de un proyecto de Alex Toro Arquitectos"
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
							<h4>Portafolio</h4>
						</div>
					</div>

					<div className={`${Styles.categories}`}>
						<button
							className={`
								${Styles.button} 
								${category === Category.Untracked ? Styles.button_active : ""}
							`}
							onClick={() => setCategory(Category.Untracked)}
						>
							Todos las Categorías
						</button>

						<button
							className={`
								${Styles.button} 
								${category === Category.Multifamiliar ? Styles.button_active : ""}
							`}
							onClick={() => setCategory(Category.Multifamiliar)}
						>
							Vivienda Multifamiliar
						</button>

						<button
							className={`
								${Styles.button} 
								${category === Category.Unifamiliar ? Styles.button_active : ""}
							`}
							onClick={() => setCategory(Category.Unifamiliar)}
						>
							Vivienda Unifamiliar
						</button>

						<button
							className={`
								${Styles.button} 
								${category === Category.Otros ? Styles.button_active : ""}
							`}
							onClick={() => setCategory(Category.Otros)}
						>
							Hotelería y Otros
						</button>
					</div>
				</div>
			</section>

			{category === Category.Untracked && <FullProjects />}
			{category === Category.Multifamiliar && <Multifamiliar />}
			{category === Category.Unifamiliar && <Unifamiliar />}
			{category === Category.Otros && <Otros />}
		</Fragment>
	);
}
