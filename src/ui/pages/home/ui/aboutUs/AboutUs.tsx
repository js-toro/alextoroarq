import Link from "next/link";
import Styles from "./AboutUs.module.scss";
import Utils from "@/ui/theme/application/utils/Utils.module.scss";

const AboutUs = () => {
	return (
		<section className={`${Styles.section}`}>
			<div className={`${Styles.wrapper}`}>
				<div className={`${Utils.container} ${Utils.d_grid} ${Utils.gap_sm}`}>
					<h2>Nosotros</h2>

					<p>
						Navega para descubrir más sobre nuestra empresa, su historia y los
						valores que guian cada proyecto que emprendemos.
					</p>

					<Link
						href="/nosotros"
						className={`${Styles.seeMore} ${Utils.button_outline} ${Utils.link_outline_off}`}
					>
						Ver Mas
					</Link>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
