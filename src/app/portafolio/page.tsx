import dynamic from "next/dynamic";

const RootPortafolio = dynamic(() => import("@/ui/pages/portafolio"), {
	ssr: true,
	loading: () => <></>,
});

export default function Portafolio() {
	return <RootPortafolio />;
}
