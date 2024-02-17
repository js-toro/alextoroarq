import { SplashContainer, Heading } from '@/styles/pages/home';

export default function Splash() {
	return (
		<SplashContainer className="absolute inset-0 z-10 size-full p-12 flex justify-center items-center">
			<Heading>
				Especialistas en:
				<strong className="block">Vivienda Multifamiliar</strong>
			</Heading>
		</SplashContainer>
	);
}
