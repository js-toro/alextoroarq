import Utils from '@/ui/theme/application/utils/Utils.module.scss';

import Slider from './slider';

const Hero = () => {
	return (
		<section className={`${Utils.relative} ${Utils.size_dfull}`}>
			<Slider />
		</section>
	);
};

export default Hero;
