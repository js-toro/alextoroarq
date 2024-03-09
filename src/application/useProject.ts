import { useProjectRepository } from '@/infrastructure/repositories';

/**
 * Hook to get the projects
 */
export const useProjects = () => {
	const data = useProjectRepository();
	return data;
};
