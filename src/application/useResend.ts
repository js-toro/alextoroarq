import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

async function send() {
	try {
		const { data } = await resend.emails.send({
			from: "onboarding@resend.dev",
			to: ["arq.alextoro.2@gmail.com"],
			subject: "Hello World",
			html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
		});

		console.log({ data });
	} catch (error) {
		return console.error({ error });
	}
}

export default function () {
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		e.currentTarget.reset();
		await send();
	};

	return {
		handleSubmit,
	};
}
