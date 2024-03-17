import Styles from './Contactanos.module.scss';
import Utils from '@/ui/theme/application/utils/Utils.module.scss';

import ContactForm from './contactForm';

const RootContactanos = () => {
	return (
		<main>
			<section className={`${Styles.grid}`}>
				<div className={`${Utils.d_grid} ${Utils.gap_sm}`}>
					<span>
						<b>PONERSE EN CONTACTO</b>
					</span>

					<h4>Contacta con nosotros y hablemos de su proyecto</h4>

					<p>
						Estamos aquí para convertir tus sueños en realidad. Completa el formulario de contacto y
						nos pondremos en contacto contigo para discutir cómo podemos colaborar en tu próximo
						proyecto arquitectónico.
					</p>
				</div>

				<ContactForm />
			</section>
		</main>
	);
};

export default RootContactanos;
