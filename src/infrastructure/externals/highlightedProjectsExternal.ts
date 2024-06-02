import { IHighlightedProjects } from "@/domain/interfaces";

const highlightedProjectsExternal = async () => {
	const response = await fetch(
		"/data/02-highlighted-projects/highlightedProjects.json"
	);
	const data: IHighlightedProjects = await response.json();
	return data;
};

export default highlightedProjectsExternal;
