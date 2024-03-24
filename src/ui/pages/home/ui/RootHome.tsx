import Hero from './hero';
import Welcome from './welcome';
import AboutUs from './aboutUs';
import Projects from './projects';
import ContactUs from './contactUs';

const RootHome = () => {
	return (
		<main>
			<Hero />
			<Welcome />
			<AboutUs />
			<Projects />
			<ContactUs />
		</main>
	);
};

export default RootHome;
