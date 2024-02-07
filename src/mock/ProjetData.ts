import { Categories, IProject, PriorityLevel } from "src/models";

/**
 * Mock data for the project
 */
export const projetMockData: IProject[] = [
	{
		id: 126,
		name: "Tibet",
		company: "Constructora Turipaná",
		year: 2017,
		category: Categories.MultiFamily,
		priority: PriorityLevel.Medium,
		mainLandscapeImage: "src/mock/storage/126-Tibet/126-Banner-3200.jpg",
		mainPortraitImage: "",
		images: {
			maps: [],
			photos: [],
			renders: [],
		},
		virtualTour: "",
		youtubeUrls: [],
	},
	{
		id: 134,
		name: "BS Suite",
		company: "Constructora Guigo",
		year: 2020,
		category: Categories.Otros,
		priority: PriorityLevel.High,
		mainLandscapeImage: "src/mock/storage/134-BS Suite/134-B-Banner-3200.jpg",
		mainPortraitImage: "",
		images: {
			maps: [],
			photos: [],
			renders: [],
		},
		virtualTour: "",
		youtubeUrls: [],
	},
	{
		id: 139,
		name: "Senderos de Calasanz",
		company: "Inver Celeste",
		year: 2019,
		category: Categories.MultiFamily,
		priority: PriorityLevel.High,
		mainLandscapeImage:
			"src/mock/storage/139-Senderos de Calasanz/139-Banner-3200.jpg",
		mainPortraitImage: "",
		images: {
			maps: [],
			photos: [],
			renders: [],
		},
		virtualTour: "",
		youtubeUrls: [],
	},
	{
		id: 148,
		name: "Prado Campestre",
		company: "Construcciones Prisma",
		year: 2021,
		category: Categories.MultiFamily,
		priority: PriorityLevel.High,
		mainLandscapeImage:
			"src/mock/storage/148-Prado Campestre/148-Banner-3200.jpg",
		mainPortraitImage: "",
		images: {
			maps: [],
			photos: [],
			renders: [],
		},
		virtualTour: "",
		youtubeUrls: [],
	},
	{
		id: 149,
		name: "Crystal Living",
		company: "Constructora GCV",
		year: 2022,
		category: Categories.Otros,
		priority: PriorityLevel.High,
		mainLandscapeImage:
			"src/mock/storage/149-Crystal Living/149b-Banner-3200.jpg",
		mainPortraitImage: "",
		images: {
			maps: [],
			photos: [],
			renders: [],
		},
		virtualTour: "",
		youtubeUrls: [],
	},
	{
		id: 150,
		name: "Bosque Aqua",
		company: "Constructora Turipaná",
		year: 2022,
		category: Categories.MultiFamily,
		priority: PriorityLevel.High,
		mainLandscapeImage: "src/mock/storage/150-Bosque Aqua/150-Banner-3200.jpg",
		mainPortraitImage: "",
		images: {
			maps: [],
			photos: [],
			renders: [],
		},
		virtualTour: "",
		youtubeUrls: [],
	},
];
