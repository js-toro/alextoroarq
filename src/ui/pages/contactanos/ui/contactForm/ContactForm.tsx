import Styles from './ContactForm.module.scss';
import Utils from '@/ui/theme/application/utils/Utils.module.scss';

const ContactForm = () => {
	return (
		<form action="https://formspree.io/f/moqyvqzr" method="POST" className={`${Styles.form}`}>
			<h4 className={`${Styles.form_heading}`}>Enviarnos un mensaje</h4>

			<div className={`${Styles.form_group}`}>
				<label htmlFor="nombre">
					<input type="text" name="nombre" id="nombre" placeholder="Su nombre" required />
				</label>
			</div>

			<div className={`${Styles.form_group}`}>
				<label htmlFor="email">
					<input type="email" name="email" id="email" placeholder="Su correo" required />
				</label>
			</div>

			<div className={`${Styles.form_group}`}>
				<label htmlFor="mensaje">
					<textarea
						name="mensaje"
						id="mensaje"
						placeholder="Su mensaje"
						required
						rows={5}></textarea>
				</label>
			</div>

			<div>
				<button type="submit" className={`${Utils.button}`}>
					Enviar
				</button>
			</div>
		</form>
	);
};

export default ContactForm;
