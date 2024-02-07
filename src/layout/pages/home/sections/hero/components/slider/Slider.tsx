import React from "react";
import { IHighlightedProject } from "src/models";

import { SliderLeftButtonIcon, SliderRightButtonIcon } from "./utilities";
import {
	LeftButtonContainer,
	ProjectNameContainer,
	RightButtonContainer,
	SliderButton,
	SliderContainer,
} from "./styles";

type SliderProps = {
	currentProject: IHighlightedProject;
	handleNextProject: () => void;
	handlePreviousProject: () => void;
};

export const Slider: React.FC<SliderProps> = ({
	currentProject,
	handleNextProject,
	handlePreviousProject,
}) => {
	return (
		<SliderContainer>
			<LeftButtonContainer onClick={handlePreviousProject}>
				<SliderButton src={SliderLeftButtonIcon} alt="" />
			</LeftButtonContainer>

			<RightButtonContainer onClick={handleNextProject}>
				<SliderButton src={SliderRightButtonIcon} alt="" />
			</RightButtonContainer>

			<ProjectNameContainer>
				<span>{currentProject.name}</span>
			</ProjectNameContainer>
		</SliderContainer>
	);
};
