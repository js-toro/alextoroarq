import { FaCircle } from 'react-icons/fa6';

import Styles from './AboutUs.module.scss';
import Utils from '@/ui/theme/application/utils/Utils.module.scss';

const AboutUs = () => {
	return (
		<section>
			<div className={`${Utils.d_grid} ${Utils.gap_md}`}>
				<p>
					Navega para descubrir más sobre nuestra empresa, su historia y los valores que guian cada
					proyecto que emprendemos.
				</p>

				<div>
					<button className={`${Utils.button_outline}`}>
						<FaCircle className={`${Utils.text_size_xxs}`} />
						<span>Ver Mas</span>
					</button>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
