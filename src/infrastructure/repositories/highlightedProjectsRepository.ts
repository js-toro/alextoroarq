import { IHighlightedProjects } from "@/domain/interfaces";

export const highlightedProjectsRepository = async () => {
	const response = await fetch(
		"/data/02-highlighted-projects/highlightedProjects.json"
	);
	const data: IHighlightedProjects = await response.json();
	return data;
};
