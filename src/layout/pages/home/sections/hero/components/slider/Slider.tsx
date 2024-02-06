import { Button } from "src/styles";
import { SliderLeftButtonIcon, SliderRightButtonIcon } from "./utilities";
import {
	LeftButtonContainer,
	PortfolioButtonContainer,
	ProjectNameContainer,
	RightButtonContainer,
	SliderButton,
	SliderContainer,
} from "./styles";

export const Slider = () => {
	return (
		<SliderContainer>
			<LeftButtonContainer>
				<SliderButton src={SliderLeftButtonIcon} alt="" />
			</LeftButtonContainer>

			<RightButtonContainer>
				<SliderButton src={SliderRightButtonIcon} alt="" />
			</RightButtonContainer>

			<ProjectNameContainer>
				<span>Casa B2</span>
			</ProjectNameContainer>

			<PortfolioButtonContainer>
				<Button>Ver Portafolio</Button>
			</PortfolioButtonContainer>
		</SliderContainer>
	);
};
