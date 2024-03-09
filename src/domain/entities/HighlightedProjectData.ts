import { IHighlightedProject } from '@/domain/interfaces';
import { PriorityLevel } from '@/domain/enums';

/**
 * Mock data for the project
 */
export const highlightedProjetMockData: IHighlightedProject[] = [
	{
		id: 65,
		name: 'Hotel Tryp',
		mainLandscapeImage: '/assets/images/highlighted-projects/065.jpg',
		priority: PriorityLevel.Low,
	},
	{
		id: 94,
		name: 'Cielo Campestre',
		mainLandscapeImage: '/assets/images/highlighted-projects/094.jpg',
		priority: PriorityLevel.Low,
	},
	{
		id: 126,
		name: 'Tibet',
		mainLandscapeImage: '/assets/images/highlighted-projects/126.jpg',
		priority: PriorityLevel.Low,
	},
	{
		id: 134,
		name: 'Berlín',
		mainLandscapeImage: '/assets/images/highlighted-projects/134.jpg',
		priority: PriorityLevel.Medium,
	},
	{
		id: 139,
		name: 'Senderos de Calasanz',
		mainLandscapeImage: '/assets/images/highlighted-projects/139.jpg',
		priority: PriorityLevel.Medium,
	},
	{
		id: 142,
		name: 'San Sebastián',
		mainLandscapeImage: '/assets/images/highlighted-projects/142.jpg',
		priority: PriorityLevel.Medium,
	},
	{
		id: 148,
		name: 'Prado Campestre',
		mainLandscapeImage: '/assets/images/highlighted-projects/148.jpg',
		priority: PriorityLevel.Medium,
	},
	{
		id: 149,
		name: 'Crystal Living',
		mainLandscapeImage: '/assets/images/highlighted-projects/149a.jpg',
		priority: PriorityLevel.High,
	},
	{
		id: 149,
		name: 'Crystal Living',
		mainLandscapeImage: '/assets/images/highlighted-projects/149b.jpg',
		priority: PriorityLevel.High,
	},
	{
		id: 150,
		name: 'Bosque Aqua',
		mainLandscapeImage: '/assets/images/highlighted-projects/150.jpg',
		priority: PriorityLevel.Medium,
	},
	{
		id: 1001,
		name: 'Casa B2',
		mainLandscapeImage: '/assets/images/highlighted-projects/C-B2a.jpg',
		priority: PriorityLevel.Medium,
	},
	{
		id: 1002,
		name: 'Casa B2',
		mainLandscapeImage: '/assets/images/highlighted-projects/C-B2b.jpg',
		priority: PriorityLevel.Medium,
	},
];
