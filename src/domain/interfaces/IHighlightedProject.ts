import { PriorityLevel } from '../enums';

/**
 * Interface that describes the structure of the highlighted project.
 */
export interface IHighlightedProject {
	order: number;
	name: string;
	mainLandscapeImage: string;
	priority: PriorityLevel;
}
