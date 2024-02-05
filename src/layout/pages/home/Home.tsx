import * as Styled from './Home.styles';

import hero from '../../../assets/images/hero.jpg';

export const Home = () => {
	return (
		<Styled.Main>
			<Styled.Banner>
				<img
					src={hero}
					alt="Una hermosa vista de un edificio"
					draggable={false}
				/>
			</Styled.Banner>

			<Styled.Wrapper $hero={hero}>
				<Styled.Heading>
					<span>Especialistas en</span> Vivienda Multifamiliar
				</Styled.Heading>
			</Styled.Wrapper>
		</Styled.Main>
	);
};
