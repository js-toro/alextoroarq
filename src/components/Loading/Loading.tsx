import LoadingIcon from "src/assets/icons/LoadingIcon.svg";

import { LoadingContainer } from "./styles";

export const Loading = () => {
	return (
		<LoadingContainer>
			<span>Cargando</span>
			<img src={LoadingIcon} alt="Loading" />
		</LoadingContainer>
	);
};
