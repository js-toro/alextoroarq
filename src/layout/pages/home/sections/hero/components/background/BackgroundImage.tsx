import React from "react";
import { IHighlightedProject } from "src/models";

import { BackgroundImagesContainer, Image } from "./styles";

type BackgroundImageProps = {
	projects: IHighlightedProject[];
	currentProjectID: number;
};

export const BackgroundImage: React.FC<BackgroundImageProps> = ({
	projects,
	currentProjectID,
}) => {
	return (
		<BackgroundImagesContainer>
			{projects.map((project, index) => (
				<Image
					key={index}
					src={project.mainLandscapeImage}
					alt={`Hermosa vista de ${project.name}, un proyecto de Alex Toro Arquitectos`}
					loading="lazy"
					$isActive={project.id === currentProjectID}
				/>
			))}
		</BackgroundImagesContainer>
	);
};
