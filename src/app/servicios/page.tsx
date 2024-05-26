import dynamic from "next/dynamic";

const RootServicios = dynamic(() => import("@/ui/pages/servicios"), {
	ssr: true,
	loading: () => <></>,
});

export default function Servicios() {
	return <RootServicios />;
}
