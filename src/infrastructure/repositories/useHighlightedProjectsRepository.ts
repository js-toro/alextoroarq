import { IHighlightedProjects } from "@/domain/interfaces";
import highlightedProjectsExternal from "../externals/highlightedProjectsExternal";

const useHighlightedProjectsRepository =
	async (): Promise<IHighlightedProjects> => {
		return highlightedProjectsExternal();
	};

export default useHighlightedProjectsRepository;
