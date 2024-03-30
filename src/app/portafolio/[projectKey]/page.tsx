import ProjectDetail from "@/ui/pages/portafolio/ui/detail/ProjectDetail";

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
