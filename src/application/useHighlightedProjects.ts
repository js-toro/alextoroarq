'use client';
import { useEffect, useState } from 'react';
import { IHighlightedProject } from '@/domain/interfaces';
import { highlightedProjetMockData } from '@/domain/entities';
import { useHighlightedProjectsRepository } from '@/infrastructure/repositories';

/**
 * Hook to get the highlighted projects
 */
export const useHighlightedProjects = () => {
	const data = useHighlightedProjectsRepository();
	const [isLoaded, setIsLoaded] = useState(false);
	const [projects, setProjects] = useState<IHighlightedProject[]>(highlightedProjetMockData);
	const [currentProject, setCurrentProject] = useState<IHighlightedProject>(
		highlightedProjetMockData[0]
	);
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		data.sort((a, b) => {
			if (a.order > b.order) {
				return -1;
			}
			if (a.order < b.order) {
				return 1;
			}
			return 0;
		});

		data.sort((a, b) => {
			if (a.priority < b.priority) {
				return -1;
			}
			if (a.priority > b.priority) {
				return 1;
			}
			return 0;
		});

		setProjects(data);
		setCurrentProject(data[0]);
		setIsLoaded(true);
	}, [data]);

	useEffect(() => {
		const interval = setInterval(() => {
			if (currentIndex === projects.length - 1) {
				setCurrentIndex(0);
				setCurrentProject(projects[0]);
			} else {
				setCurrentIndex(currentIndex + 1);
				setCurrentProject(projects[currentIndex + 1]);
			}
		}, 7000);
		return () => clearInterval(interval);
	}, [currentIndex, currentProject, projects]);

	const handleNextProject = () => {
		if (currentIndex === projects.length - 1) {
			setCurrentIndex(0);
			setCurrentProject(projects[0]);
		} else {
			setCurrentIndex(currentIndex + 1);
			setCurrentProject(projects[currentIndex + 1]);
		}
	};

	const handlePreviousProject = () => {
		if (currentIndex === 0) {
			setCurrentIndex(projects.length - 1);
			setCurrentProject(projects[projects.length - 1]);
		} else {
			setCurrentIndex(currentIndex - 1);
			setCurrentProject(projects[currentIndex - 1]);
		}
	};

	return {
		isLoaded,
		projects,
		currentProject,
		handleNextProject,
		handlePreviousProject,
	};
};
