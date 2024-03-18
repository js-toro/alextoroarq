import Styles from './ContactUs.module.scss';
import Utils from '@/ui/theme/application/utils/Utils.module.scss';

import ContactForm from '@/ui/pages/contactanos/ui/contactForm';

const ContactUs = () => {
	return (
		<section className={`${Styles.grid}`}>
			<div className={`${Utils.d_grid} ${Utils.gap_xs}`}>
				<span className={`${Utils.text_heading}`}>
					<b>PONERSE EN CONTACTO</b>
				</span>

				<h4>Establece contacto con nosotros para tener el gusto de atenderlo</h4>
			</div>

			<div>
				<p>
					En nuestra empresa de arquitectura, el proceso de diseño comienza con un análisis
					exhaustivo de los requisitos del cliente, las condiciones del emplazamiento y la normativa
					local para sentar las bases de un proyecto de éxito.
				</p>
			</div>

			<div className={`${Styles.grid_form}`}>
				<ContactForm />
			</div>
		</section>
	);
};

export default ContactUs;
