import Hero from './hero';
import Welcome from './welcome';
import We from './we';
import OurProjects from './ourProjects';
import OurServices from './ourServices';
import ContactUs from './contactUs';

const RootHome = () => {
	return (
		<main>
			<Hero />
			<Welcome />
			<We />
			<OurProjects />
			<OurServices />
			<ContactUs />
		</main>
	);
};

export default RootHome;
