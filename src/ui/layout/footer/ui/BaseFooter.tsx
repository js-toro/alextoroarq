import useYear from '../application/useYear';
import Utils from '@/ui/theme/application/utils/Utils.module.scss';

import { FaFacebook } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { TbBrandYoutubeFilled } from 'react-icons/tb';

const BaseFooter = () => {
	const year = useYear();

	return (
		<footer className={Utils.text_center}>
			<div className={`${Utils.d_flex} ${Utils.gap_sm} ${Utils.justify_center}`}>
				<button className={`${Utils.button_icon}`}>
					<FaFacebook />
				</button>
				<button className={`${Utils.button_icon}`}>
					<AiFillInstagram />
				</button>
				<button className={`${Utils.button_icon}`}>
					<TbBrandYoutubeFilled />
				</button>
			</div>

			<p className={`${Utils.mt_sm} ${Utils.mb_xxs} ${Utils.text_bold}`}>
				Alex Toro Arquitectos S.A.S
			</p>

			<small>Todos los derechos reservados &copy; {year}</small>
		</footer>
	);
};

export default BaseFooter;
