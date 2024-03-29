"use client";
import Styles from "./RootPortafolio.module.scss";
import useProjectLayout from "@/application/hooks/useProjectLayout";
import { Category } from "@/domain/enums";

import ContactForm from "@/ui/pages/contactanos/ui/contactForm";
import Multifamiliar from "./multifamiliar";
import Unifamiliar from "./unifamiliar";
import Otros from "./otros";

const RootPortafolio = () => {
	const { activeCategory, handleCategory } = useProjectLayout();

	return (
		<>
			<section className={`${Styles.cover_wrapper}`}>
				<div>
					<img
						className={`${Styles.cover}`}
						src={
							activeCategory === Category.Multifamiliar
								? "/assets/images/portafolio/portafolio-multifamiliar.jpg"
								: activeCategory === Category.Unifamiliar
								? "/assets/images/portafolio/portafolio-unifamiliar.jpg"
								: "/assets/images/portafolio/portafolio-otros.jpg"
						}
						alt={`Una hermosa vista de un proyecto de Alex Toro Arquitectos`}
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

			{activeCategory === Category.Multifamiliar && <Multifamiliar />}
			{activeCategory === Category.Unifamiliar && <Unifamiliar />}
			{activeCategory === Category.Otros && <Otros />}

			<section>
				<ContactForm />
			</section>
		</>
	);
};

export default RootPortafolio;
