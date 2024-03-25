import Image from "next/image";

import Styles from "./RootContactanos.module.scss";
import Utils from "@/ui/theme/application/utils/Utils.module.scss";

import ContactForm from "./contactForm";

const RootContactanos = () => {
	return (
		<>
			<section className={`${Styles.cover_wrapper}`}>
				<div>
					<Image
						className={`${Styles.cover}`}
						src={"/assets/images/contacto/banner-contacto.jpg"}
						alt={`Una hermosa vista de xxx, un proyecto de Alex Toro Arquitectos`}
						width={3200}
						height={940}
					/>
				</div>

				<div className={Styles.grid}>
					<div className={`${Styles.title}`}>
						<div>
							<h4>Contacto</h4>
						</div>
					</div>

					<div className={`${Styles.subtitle}`}>
						<span>Somos una firma especializada en Vivienda Multifamiliar</span>
					</div>
				</div>
			</section>

			<section>
				<ContactForm />
			</section>
		</>
	);
};

export default RootContactanos;
