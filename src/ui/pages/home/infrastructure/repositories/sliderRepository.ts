import { ISlider } from "../../domain/interfaces/ISlider";

export default async () => {
	const response = await fetch("/data/01-slider/slider.json");
	const data: ISlider = await response.json();
	return data;
};
