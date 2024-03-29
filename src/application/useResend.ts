"use client";
import { resendRepository } from "@/infrastructure/repositories/resendRepository";

export function useResend() {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		e.currentTarget.reset();
		resendRepository().then((response) => console.log(response));
	};

	return {
		handleSubmit,
	};
}
