import { ISlider } from "../../domain/interfaces/ISlider";
import sliderExternal from "../external/sliderExternal";

const useSliderRepository = async (): Promise<ISlider> => {
	return await sliderExternal();
};

export default useSliderRepository;
