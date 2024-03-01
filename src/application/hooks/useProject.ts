import { projectInterceptor } from '@/infrastructure/interceptors';

/**
 * Hook to get the projects
 */
export const useProjects = () => {
	const data = projectInterceptor();
	return data;
};
