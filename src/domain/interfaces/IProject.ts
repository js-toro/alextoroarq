import { Categories, PriorityLevel } from '../enums';

/**
 * Interface that describes the structure of a project
 */
export interface IProject {
	id: number;
	name: string;
	company: string;
	year: number;
	category: Categories;
	priority: PriorityLevel;
	mainLandscapeImage: string;
	mainPortraitImage: string;
	images: {
		maps: string[];
		photos: string[];
		renders: string[];
	};
	virtualTour: string;
	youtubeUrls: string[];
}
