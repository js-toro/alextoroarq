import Hero from "./hero";
import Welcome from "./welcome";
import AboutUs from "./aboutUs";
import Projects from "./projects";

const RootHome = () => {
	return (
		<main>
			<Hero />
			<Welcome />
			<AboutUs />
			<Projects />
		</main>
	);
};

export default RootHome;
