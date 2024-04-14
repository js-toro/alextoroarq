import { Category } from "@/domain/enums";
import { Priority } from "@/domain/enums";

export interface IProject {
	id: number;
	name: string;
	description: string;
	category: Category;
	priority: Priority;
	builder: string;
	year: number;
	length: number | string;
	thumb: string;
	images: string[];
	youtube: string[];
	virtualTours: string[];
}

export interface IProjects {
	projects: IProject[];
}
