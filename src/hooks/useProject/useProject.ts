import { useMemo } from 'react';

import {
	HighlightProjectInterceptor,
	ProjectInterceptor,
} from '@/interceptors';
import { IHighlightedProject } from '@/models';

/**
 * Hook to get the highlighted projects
 */
export const useHighlightedProjects = () => {
	const data = HighlightProjectInterceptor();

	const orderedProjects = useMemo(() => {
		const firstProject = data.find((project) => project.id === 149);
		const otherProjects = data.filter((project) => project.id !== 149);
		const orderedProjects = otherProjects.sort(() => Math.random() - 0.5);
		orderedProjects.unshift(firstProject as IHighlightedProject);
		return orderedProjects;
	}, [data]);

	return orderedProjects;
};

/**
 * Hook to get the projects
 */
export const useProjects = () => {
	const data = ProjectInterceptor();
	return data;
};
