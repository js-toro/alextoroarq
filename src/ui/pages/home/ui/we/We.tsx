import { FaCircle } from 'react-icons/fa6';

import Styles from './We.module.scss';
import Utils from '@/ui/theme/application/utils/Utils.module.scss';
import Image from 'next/image';

const We = () => {
	return (
		<section className={`${Styles.grid}`}>
			<div className={`${Utils.d_grid} ${Utils.gap_md}`}>
				<div className={`${Utils.d_grid} ${Utils.gap_xxs}`}>
					<span className={`${Utils.text_heading}`}>
						<b>CONOCE MÁS</b>
					</span>

					<h3>Acerca de nosotros</h3>
				</div>

				<p>
					Descubre más sobre nuestra empresa, su historia y los valores que guían cada proyecto que
					emprendemos.
				</p>

				<div>
					<button className={`${Utils.button_outline}`}>
						<FaCircle className={`${Utils.text_size_xxs}`} />
						<span>Leer más</span>
					</button>
				</div>
			</div>

			<div className={`${Styles.image_container}`}>
				<Image
					src="/assets/images/highlighted-projects/149a.jpg"
					alt={`Una hermosa vista de Crystal Living, un proyecto de Alex Toro Arquitectos`}
					width={1920}
					height={1920}
					className={`${Styles.image}`}
				/>
			</div>
		</section>
	);
};

export default We;
