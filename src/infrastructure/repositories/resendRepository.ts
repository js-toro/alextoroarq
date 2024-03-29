"use server";
import { Resend } from "resend";

import { IContactForm } from "@/domain/interfaces";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

async function requestMail(values: IContactForm) {
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
}

async function responseMail(values: IContactForm) {
	try {
		const { data } = await resend.emails.send({
			from: "onboarding@resend.dev",
			to: values.email,
			subject: "Muchas gracias por contactar con Alex Toro Arquitectos",
			html: `
				<h2>Hemos recibido su mensaje</h2>
				<p>En la medida de lo posible entraremos en contacto con ustedes.</p>

				<small>Este es un correo de respuesta automática, favor no responder a este correo.</small>
				`,
		});

		return data;
	} catch (error) {
		return error;
	}
}

export async function resendRepository(values: IContactForm) {
	const request = await requestMail(values);

	return { request };
}
