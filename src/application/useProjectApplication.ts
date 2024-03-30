"use client";
import { useEffect, useState } from "react";
import { IProject } from "@/domain/interfaces";
import { projectRepository } from "@/infrastructure/repositories";
import { Category } from "@/domain/enums";

export const useProjectApplication = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [projects, setProjects] = useState<IProject[]>([]);
	const [findedProject, setFindedProject] = useState<IProject>();

	useEffect(() => {
		projectRepository().then(({ projects }) => {
			const projectsSorted = projects.sort((a, b) => {
				if (a.priority === b.priority) {
					return b.year - a.year;
				}

				return a.priority - b.priority;
			});

			console.log(projectsSorted);
			setProjects(projectsSorted);
			setIsLoading(false);
		});
	}, []);

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
