import Styles from './Hero.module.scss';
import Utils from '@/ui/theme/application/utils/Utils.module.scss';

import Splash from './splash';
import Slider from './slider';

const Hero = () => {
	return (
		<>
			<div className={`${Styles.container} ${Utils.relative} ${Utils.size_dfull}`}>
				<Splash />
				<Slider />
			</div>
		</>
	);
};

export default Hero;
