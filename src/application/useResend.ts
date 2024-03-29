"use client";
import React, { useState } from "react";

import { IContactForm } from "@/domain/interfaces";
import { resendRepository } from "@/infrastructure/repositories";
import { validateContactForm } from "@/infrastructure/validation/validateContactForm";

export function useResend() {
	const [values, setValues] = useState<IContactForm>({
		name: "",
		phone: "",
		email: "",
		subject: "",
		message: "",
	});

	const onChangeValues = (
		e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.currentTarget;
		setValues({ ...values, [name]: value });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		e.currentTarget.reset();

		const error = validateContactForm(values);

		if (error) {
			alert(error);
			return;
		}

		resendRepository(values).then((response) => console.log(response));
	};

	return {
		values,
		onChangeValues,
		handleSubmit,
	};
}
