"use client";
import { useEffect, useState } from "react";

import useProjectRepository from "@/infrastructure/repositories/useProjectRepository";
import { IProject } from "@/domain/interfaces";
import { Category } from "@/domain/enums";

interface IUseProjectApplication {
	isLoading: boolean;
	projects: IProject[];
	findedProject?: IProject;
	findProject: (id: number) => void;
	filterByCategory: (category: Category) => IProject[] | undefined;
}

const useProject = (): IUseProjectApplication => {
	const getProjects = useProjectRepository;

	const [isLoading, setIsLoading] = useState(true);
	const [projects, setProjects] = useState<IProject[]>([]);
	const [findedProject, setFindedProject] = useState<IProject>();

	useEffect(() => {
		getProjects().then(({ projects }) => {
			const projectsSorted = projects.sort((a, b) => {
				if (a.priority === b.priority) {
					return b.year - a.year;
				}

				return a.priority - b.priority;
			});

			setProjects(projectsSorted);
			setIsLoading(false);
		});
	}, [getProjects]);

	const findProject = (id: number) => {
		if (isLoading) return;
		setFindedProject(projects.find((project) => project.id === id));
	};

	const filterByCategory = (category: Category) => {
		if (isLoading) return;

		const filteredProjects = projects.filter(
			(project) => project.category === category
		);

		return filteredProjects;
	};

	return { isLoading, projects, findedProject, findProject, filterByCategory };
};

export default useProject;
