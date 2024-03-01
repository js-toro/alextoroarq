'use client';
import { SplashContainer, Heading } from '@/styles/layout/home';
import { useEffect, useState } from 'react';

export default function Splash() {
	const [isActive, setIsActive] = useState(true);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsActive(false);
		}, 5000);

		return () => clearTimeout(timeout);
	}, []);

	return (
		<>
			{isActive && (
				<SplashContainer className="absolute inset-0 z-20 size-full p-12 flex justify-center items-center">
					<Heading>
						Especialistas en:
						<strong className="block">Vivienda Multifamiliar</strong>
					</Heading>
				</SplashContainer>
			)}
		</>
	);
}
