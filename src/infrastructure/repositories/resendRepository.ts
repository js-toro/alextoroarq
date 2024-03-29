"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function resendRepository() {
	try {
		const { data } = await resend.emails.send({
			from: "onboarding@resend.dev",
			to: ["arq.alextoro.2@gmail.com"],
			subject: "Hello World",
			html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
		});

		return data;
	} catch (error) {
		return error;
	}
}
