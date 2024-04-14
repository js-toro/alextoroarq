import dynamic from "next/dynamic";

const RootContactanos = dynamic(() => import("@/ui/pages/contactanos"), {
	ssr: true,
	loading: () => <></>,
});

export default function Contactanos() {
	return <RootContactanos />;
}
