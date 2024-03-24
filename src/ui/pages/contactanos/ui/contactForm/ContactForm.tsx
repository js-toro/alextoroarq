import Image from 'next/image';
import Styles from './ContactForm.module.scss';
import Utils from '@/ui/theme/application/utils/Utils.module.scss';

const ContactForm = () => {
	return (
		<section className={`${Styles.section}`}>
			<div className={`${Utils.container}`}>
				<p className={`${Utils.text_italic}`}>
					Estamos aquí para convertir tus sueños en realidad, Completa el formulario de contacto y
					nos pondremos en contacto contigo para discutir cómo podemos colaborar en tu próximo
					proyecto arquitectónico.
				</p>

				<div className={`${Styles.grid}`}>
					<div>
						<h3 className={`${Utils.mb_sm}`}>Ubicación</h3>

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
						<Image
							src="/images/contactanos/mapa.png"
							alt="Mapa de ubicación"
							width={400}
							height={400}
						/>
					</div>

					<div>
						<h3 className={`${Utils.mb_sm}`}>Teléfono</h3>

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

					<form className={`${Styles.form}`} action="#">
						<div className={`${Styles.form_group}`}>
							<label htmlFor="name">
								<span>Nombre</span> <small>(requerido)</small>
							</label>

							<input type="text" id="name" required placeholder="" />
						</div>

						<div className={`${Styles.form_group}`}>
							<label htmlFor="email">
								<span>Teléfono</span> <small>(requerido)</small>
							</label>

							<input type="email" id="email" required placeholder="" />
						</div>

						<div className={`${Styles.form_group}`}>
							<label htmlFor="phone">
								<span>Correo</span> <small>(requerido)</small>
							</label>

							<input type="text" id="phone" required placeholder="" />
						</div>

						<div className={`${Styles.form_group}`}>
							<label htmlFor="phone">
								<span>Asunto</span> <small>(requerido)</small>
							</label>

							<input type="text" id="phone" required placeholder="" />
						</div>

						<div className={`${Styles.form_group}`}>
							<label htmlFor="message">
								<span>Mensaje</span> <small>(requerido)</small>
							</label>

							<textarea id="message" required placeholder="" rows={5}></textarea>
						</div>

						<button type="submit" className={`${Utils.btn_primary} ${Utils.button}`}>
							Enviar / Submit
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default ContactForm;
