import Splash from './components/Splash';
import Slider from './components/Slider';

export default function HeroLayout() {
	return (
		<section className="w-full h-dvh p-12">
			<Splash />
			<Slider />
		</section>
	);
}
