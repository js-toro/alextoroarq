import dynamic from "next/dynamic";

const RootNosotros = dynamic(() => import("@/ui/pages/nosotros"), {
	ssr: true,
	loading: () => <></>,
});

export default function Nosotros() {
	return <RootNosotros />;
}
