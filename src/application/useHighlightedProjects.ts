import { useEffect, useState } from "react";

import { highlightedProjectsRepository } from "@/infrastructure/repositories";
import { projectRepository } from "@/infrastructure/repositories";
import { IProject } from "@/domain/interfaces";

export const useHighlightedProjects = () => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [highlightedProjects, setHighlightedProjects] = useState<number[]>([]);
	const [projects, setProjects] = useState<IProject[]>([]);
	const [currentShowCount, setCurrentShowCount] = useState<number>(6);
	const [showMore, setShowMore] = useState<boolean>(false);

	useEffect(() => {
		highlightedProjectsRepository().then(({ highlightedProjects }) => {
			setHighlightedProjects(highlightedProjects);
		});
	}, []);

	useEffect(() => {
		if (highlightedProjects.length === 0) return;

		projectRepository().then(({ projects }) => {
			const highlightedProjectsFiltered = projects.filter((project) =>
				highlightedProjects.includes(project.id)
			);

			const highlightedProjectsSorted = highlightedProjectsFiltered.sort(
				(a, b) => {
					if (a.priority === b.priority) {
						return b.year - a.year;
					}

					return a.priority - b.priority;
				}
			);

			setProjects(highlightedProjectsSorted.slice(0, currentShowCount));
			setIsLoading(false);
		});
	}, [highlightedProjects, currentShowCount]);

	const handleShowMore = () => {
		setCurrentShowCount(currentShowCount + 6);
		setShowMore(true);
	};

	return { isLoading, projects, showMore, handleShowMore };
};
