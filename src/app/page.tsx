import dynamic from 'next/dynamic';
const RootHome = dynamic(() => import('@/ui/pages/home'), {
	ssr: true,
	loading: () => <></>,
});

export default function Home() {
	return <RootHome />;
}
