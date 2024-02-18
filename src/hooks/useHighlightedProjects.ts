import { useEffect, useState } from 'react';
import { IHighlightedProject } from '@/models';
import { highlightedProjetMockData } from '@/mock';
import { highlightProjectInterceptor } from '@/interceptors';

/**
 * Hook to get the highlighted projects
 */
export const useHighlightedProjects = () => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [projects, setProjects] = useState<IHighlightedProject[]>(
		highlightedProjetMockData
	);
	const [currentProject, setCurrentProject] = useState<IHighlightedProject>(
		highlightedProjetMockData[0]
	);
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const projects = highlightProjectInterceptor();

		projects.sort((a, b) => {
			if (a.priority < b.priority) {
				return -1;
			}
			if (a.priority > b.priority) {
				return 1;
			}
			return 0;
		});

		setProjects(projects);
		setCurrentProject(projects[0]);
		setIsLoaded(true);
	}, []);

	useEffect(() => {
		const interval = setInterval(handleNextProject, 7000);
		return () => clearInterval(interval);
	}, [currentProject, projects]);

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

	return [
		isLoaded,
		projects,
		currentProject,
		currentIndex,
		handleNextProject,
		handlePreviousProject,
	] as const;
};
