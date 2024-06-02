"use server";
import { Resend } from "resend";

import { IContactForm } from "@/domain/interfaces";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

const resendExternal = async (values: IContactForm) => {
	try {
		const { data } = await resend.emails.send({
			from: "onboarding@resend.dev",
			to: "arq.alextoro.2@gmail.com",
			subject: `Alex Toro Arquitectos: ${values.subject}`,
			html: `
				<h2>Acabas de recibir un mensaje desde tu sitio web</h2>
				<p>${values.message}</p>
				<p>De: ${values.name}</p>
				<p>Teléfono: ${values.phone}</p>
				<p>Correo: ${values.email}</p>
				`,
		});

		return data;
	} catch (error) {
		return error;
	}
};

export default resendExternal;
