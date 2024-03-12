import Styles from './ContactForm.module.scss';

const ContactForm = () => {
	return (
		<section>
			<h1>Cotiza ahora</h1>

			<p>Déjanos un mensaje presentando sus ideas proyecto y te llamaremos para una contización</p>

			<form action="https://formspree.io/f/moqyvqzr" method="POST" className={`${Styles.form}`}>
				<div className={`${Styles.form_group}`}>
					<label htmlFor="nombre">Su nombre:</label>

					<label htmlFor="nombre">
						<input type="text" name="nombre" id="nombre" required />
					</label>
				</div>

				<div className={`${Styles.form_group}`}>
					<label htmlFor="email">Su correo:</label>

					<label htmlFor="email">
						<input type="email" name="email" id="email" required />
					</label>
				</div>

				<div className={`${Styles.form_group}`}>
					<label htmlFor="mensaje">Mensaje: </label>

					<label htmlFor="mensaje">
						<textarea name="mensaje" id="mensaje" required rows={5}></textarea>
					</label>
				</div>

				<button type="submit">Enviar</button>
			</form>
		</section>
	);
};

export default ContactForm;
