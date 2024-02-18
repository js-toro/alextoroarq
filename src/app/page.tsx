import dynamic from 'next/dynamic';
const HeroLayout = dynamic(() => import('@/layout/home/HeroLayout'), {
	ssr: true,
	loading: () => <></>,
});

export default function Home() {
	return (
		<main>
			<HeroLayout />
		</main>
	);
}
