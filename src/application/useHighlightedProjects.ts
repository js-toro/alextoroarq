import { useEffect, useState } from "react";

import useHighlightedProjectsRepository from "@/infrastructure/repositories/useHighlightedProjectsRepository";
import useProjectRepository from "@/infrastructure/repositories/useProjectRepository";
import { IProject } from "@/domain/interfaces";

const useHighlightedProjects = () => {
	const getProjects = useProjectRepository;
	const getHighlightedProjects = useHighlightedProjectsRepository;

	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [highlightedProjects, setHighlightedProjects] = useState<number[]>([]);
	const [projects, setProjects] = useState<IProject[]>([]);
	const [currentShowCount, setCurrentShowCount] = useState<number>(6);
	const [showMore, setShowMore] = useState<boolean>(false);

	useEffect(() => {
		getHighlightedProjects().then(({ highlightedProjects }) => {
			setHighlightedProjects(highlightedProjects);
		});
	}, [getHighlightedProjects]);

	useEffect(() => {
		if (highlightedProjects.length === 0) return;

		getProjects().then(({ projects }) => {
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
	}, [highlightedProjects, currentShowCount, getProjects]);

	const handleShowMore = () => {
		setCurrentShowCount(currentShowCount + 6);
		setShowMore(true);
	};

	return { isLoading, projects, showMore, handleShowMore };
};

export default useHighlightedProjects;
