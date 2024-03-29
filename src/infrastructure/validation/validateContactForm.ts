import { IContactForm } from "@/domain/interfaces";

export const validateContactForm = (values: IContactForm) => {
	const error = "";
	console.table(values);

	if (!values.name) {
		return "El nombre es requerido";
	}

	if (values.name && values.name.length > 100) {
		return "El nombre es muy largo";
	}

	if (values.phone && !/^\d{10}$/.test(values.phone)) {
		return "El teléfono debe ser numérico";
	}

	if (values.phone && values.phone.length < 6) {
		return "El teléfono debe tener al menos 6 caracteres";
	}

	if (!values.email) {
		return "El correo es requerido";
	}

	if (
		values.email &&
		!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
	) {
		return "El correo no es válido";
	}

	if (!values.subject) {
		return "El asunto es requerido";
	}

	if (values.subject && values.subject.length > 100) {
		return "El asunto es muy largo";
	}

	if (!values.message) {
		return "El mensaje es requerido";
	}

	if (values.message && values.message.length > 500) {
		return "El mensaje es muy largo";
	}

	return error;
};
