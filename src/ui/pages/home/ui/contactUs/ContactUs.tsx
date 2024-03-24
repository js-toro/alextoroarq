import Styles from './ContactUs.module.scss';
import Utils from '@/ui/theme/application/utils/Utils.module.scss';

import ContactForm from '@/ui/pages/contactanos/ui/contactForm';

const ContactUs = () => {
	return (
		<section>
			<div>
				<p className={`${Utils.text_italic}`}>
					Estamos aquí para convertir tus sueños en realidad, Completa el formulario de contacto y
					nos pondremos en contacto contigo para discutir cómo podemos colaborar en tu próximo
					proyecto arquitectónico.
				</p>
			</div>

			<div className={`${Styles.grid_form}`}>
				<ContactForm />
			</div>
		</section>
	);
};

export default ContactUs;
