import { projectInterceptor } from '@/interceptors';

/**
 * Hook to get the projects
 */
export const useProjects = () => {
	const data = projectInterceptor();
	return data;
};
