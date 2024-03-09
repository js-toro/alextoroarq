import { PriorityLevel } from '../enums';

/**
 * Interface that describes the structure of the highlighted project.
 */
export interface IHighlightedProject {
	id: number;
	name: string;
	mainLandscapeImage: string;
	priority: PriorityLevel;
}
