import { IProjects } from "@/domain/interfaces";

export const projectRepository = async () => {
	const response = await fetch("/data/03-projects/projects.json");
	const data: IProjects = await response.json();
	return data;
};
