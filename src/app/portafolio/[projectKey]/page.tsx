import dynamic from "next/dynamic";

const ProjectDetail = dynamic(
	() => import("@/ui/pages/portafolio/ui/detail/ProjectDetail"),
	{
		ssr: true,
		loading: () => <></>,
	}
);

type Params = {
	projectKey: string;
};

type Props = {
	params: Params;
};

export default function Detail({ params }: Props) {
	const { projectKey } = params;

	return <ProjectDetail projectKey={projectKey} />;
}
