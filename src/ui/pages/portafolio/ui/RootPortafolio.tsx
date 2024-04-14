"use client";
import Image from "next/image";

import Styles from "./RootPortafolio.module.scss";

import { Category } from "@/domain/enums";
import ContactForm from "@/ui/pages/contactanos/ui/contactForm";

import useProjectLayout from "@/ui/pages/portafolio/application";
import Multifamiliar from "./multifamiliar";
import Unifamiliar from "./unifamiliar";
import Otros from "./otros";
import FullProjects from "./fullProjects/FullProjects";

const RootPortafolio = () => {
	const { banner, activeCategory, handleCategory } = useProjectLayout();

	return (
		<>
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
								${activeCategory === Category.Untracked ? Styles.button_active : ""}
							`}
							onClick={() => handleCategory(Category.Untracked)}
						>
							Todos las Categorías
						</button>

						<button
							className={`
								${Styles.button} 
								${activeCategory === Category.Multifamiliar ? Styles.button_active : ""}
							`}
							onClick={() => handleCategory(Category.Multifamiliar)}
						>
							Vivienda Multifamiliar
						</button>

						<button
							className={`
								${Styles.button} 
								${activeCategory === Category.Unifamiliar ? Styles.button_active : ""}
							`}
							onClick={() => handleCategory(Category.Unifamiliar)}
						>
							Vivienda Unifamiliar
						</button>

						<button
							className={`
								${Styles.button} 
								${activeCategory === Category.Otros ? Styles.button_active : ""}
							`}
							onClick={() => handleCategory(Category.Otros)}
						>
							Hotelería y Otros
						</button>
					</div>
				</div>
			</section>

			{activeCategory === Category.Untracked && <FullProjects />}
			{activeCategory === Category.Multifamiliar && <Multifamiliar />}
			{activeCategory === Category.Unifamiliar && <Unifamiliar />}
			{activeCategory === Category.Otros && <Otros />}
		</>
	);
};

export default RootPortafolio;
