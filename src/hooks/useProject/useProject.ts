import {
	HighlightProjectInterceptor,
	ProjectInterceptor,
} from "src/interceptors";

/**
 * Hook to get the highlighted projects
 */
export const useHighlightedProjects = () => {
	const data = HighlightProjectInterceptor();
	return data;
};

/**
 * Hook to get the projects
 */
export const useProjects = () => {
	const data = ProjectInterceptor();
	return data;
};
