import resendExternal from "@/infrastructure/externals/resendExternal";
import { IContactForm } from "@/domain/interfaces";

const useResendRepository = async (values: IContactForm) => {
	const request = await resendExternal(values);
	return { request };
};

export default useResendRepository;
