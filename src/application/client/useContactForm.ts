"use client";
import React, { useState } from "react";

import { IContactForm } from "@/domain/interfaces";
import validateContactForm from "@/application/validation/validateContactForm";
import useResendRepository from "@/infrastructure/repositories/useResendRepository";

const initialValues: IContactForm = {
	name: "",
	phone: "",
	email: "",
	message: "",
	subject: "",
};

const useContactForm = () => {
	const resend = useResendRepository;
	const [values, setValues] = useState<IContactForm>(initialValues);

	const onChangeValues = (
		e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
	): void => {
		const { name, value } = e.currentTarget;
		setValues({ ...values, [name]: value });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		e.currentTarget.reset();

		const error = validateContactForm(values);

		if (error) {
			alert(error);
			return;
		}

		resend(values).then((response) => console.log(response));
		setValues(initialValues);
	};

	return {
		values,
		onChangeValues,
		handleSubmit,
	};
};

export default useContactForm;
