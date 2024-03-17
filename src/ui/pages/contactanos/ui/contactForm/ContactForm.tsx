import Styles from './ContactForm.module.scss';

const ContactForm = () => {
	return (
		<form action="https://formspree.io/f/moqyvqzr" method="POST" className={`${Styles.form}`}>
			<div className={`${Styles.form_group}`}>
				<label htmlFor="nombre">Su nombre:</label>

				<label htmlFor="nombre">
					<input type="text" name="nombre" id="nombre" placeholder="Nombre..." required />
				</label>
			</div>

			<div className={`${Styles.form_group}`}>
				<label htmlFor="email">Su correo:</label>

				<label htmlFor="email">
					<input type="email" name="email" id="email" placeholder="Correo..." required />
				</label>
			</div>

			<div className={`${Styles.form_group}`}>
				<label htmlFor="mensaje">Mensaje: </label>

				<label htmlFor="mensaje">
					<textarea
						name="mensaje"
						id="mensaje"
						placeholder="Mensaje..."
						required
						rows={5}></textarea>
				</label>
			</div>

			<button type="submit">Enviar</button>
		</form>
	);
};

export default ContactForm;
