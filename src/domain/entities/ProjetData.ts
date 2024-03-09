import { IProject } from '@/domain/interfaces';
import { Categories, PriorityLevel } from '@/domain/enums';

/**
 * Mock data for the project
 */
export const projetMockData: IProject[] = [
	{
		id: 126,
		name: 'Tibet',
		company: 'Constructora Turipaná',
		year: 2017,
		category: Categories.MultiFamily,
		priority: PriorityLevel.Medium,
		mainLandscapeImage: '',
		mainPortraitImage: '',
		images: {
			maps: [],
			photos: [],
			renders: [],
		},
		virtualTour: '',
		youtubeUrls: [],
	},
];
