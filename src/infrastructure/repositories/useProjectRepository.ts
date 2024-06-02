import { IProjects } from "@/domain/interfaces";
import projectExternal from "@/infrastructure/externals/projectExternal";

const useProjectRepository = async (): Promise<IProjects> => {
	return await projectExternal();
};

export default useProjectRepository;
