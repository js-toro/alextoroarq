"use client";
import Styles from "./ContactForm.module.scss";
import Utils from "@/ui/theme/application/utils/Utils.module.scss";
import GoogleMap from "@/ui/pages/contactanos/ui/googlemap";
import { useResend } from "@/application";

const ContactForm = () => {
	const { values, onChangeValues, handleSubmit } = useResend();

	return (
		<section className={`${Styles.section}`}>
			<div className={`${Utils.container}`}>
				<p className={`${Utils.text_italic}`}>
					Estamos aquí para convertir tus sueños en realidad, Completa el
					formulario de contacto y nos pondremos en contacto contigo para
					discutir cómo podemos colaborar en tu próximo proyecto arquitectónico.
				</p>

				<div className={`${Styles.grid}`}>
					<div>
						<h3 className={`${Utils.mb_sm} ${Utils.text_light}`}>UBICACIÓN</h3>

						<p>
							<small>Carrera 49 # 45-48 (Of 2006)</small>
						</p>

						<p>
							<small>Condominio Santa Clara - Bello, Antioquia</small>
						</p>

						<p>
							<small>Colombia</small>
						</p>
					</div>

					<div>
						<GoogleMap />
					</div>

					<div>
						<h3 className={`${Utils.mb_sm} ${Utils.text_light}`}>TELÉFONO</h3>

						<p>
							<small>+57 - 574 462 8823</small>
						</p>

						<p>
							<small>+57 - 313 646 5462</small>
						</p>
					</div>

					<form className={`${Styles.form}`} onSubmit={handleSubmit}>
						<div className={`${Styles.form_group}`}>
							<label htmlFor="name">
								<span>Nombre</span> <small>(requerido)</small>
							</label>

							<input
								id="name"
								name="name"
								type="text"
								value={values.name}
								onChange={onChangeValues}
								required
							/>
						</div>

						<div className={`${Styles.form_group}`}>
							<label htmlFor="phone">
								<span>Teléfono</span>
							</label>

							<input
								id="phone"
								name="phone"
								type="text"
								value={values.phone}
								onChange={onChangeValues}
							/>
						</div>

						<div className={`${Styles.form_group}`}>
							<label htmlFor="email">
								<span>Correo</span> <small>(requerido)</small>
							</label>

							<input
								id="email"
								name="email"
								type="email"
								value={values.email}
								onChange={onChangeValues}
								required
							/>
						</div>

						<div className={`${Styles.form_group}`}>
							<label htmlFor="subject">
								<span>Asunto</span> <small>(requerido)</small>
							</label>

							<input
								id="subject"
								name="subject"
								type="text"
								value={values.subject}
								onChange={onChangeValues}
								required
							/>
						</div>

						<div className={`${Styles.form_group}`}>
							<label htmlFor="message">
								<span>Mensaje</span> <small>(requerido)</small>
							</label>

							<textarea
								id="message"
								name="message"
								value={values.message}
								onChange={onChangeValues}
								required
								rows={5}
							></textarea>
						</div>

						<div>
							<button type="submit" className={`${Utils.button_outline_light}`}>
								ENVIAR
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default ContactForm;
