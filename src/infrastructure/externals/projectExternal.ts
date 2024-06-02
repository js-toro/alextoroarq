import { IProjects } from "@/domain/interfaces";

const projectExternal = async () => {
	const response = await fetch("/data/03-projects/projects.json");
	const data: IProjects = await response.json();
	return data;
};

export default projectExternal;
