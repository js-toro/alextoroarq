import Styles from './Splash.module.scss';
import Utils from '@/ui/theme/application/utils/Utils.module.scss';

const Splash = () => {
	return (
		<div
			className={`${Utils.absolute} ${Utils.position_full} ${Utils.z_index_n10} ${Styles.splash}`}>
			<h1 className={`${Styles.heading}`}>
				<span className={`${Utils.d_block} ${Utils.text_light} ${Utils.text_size_xxl}`}>
					Especialistas en
				</span>

				<span>Vivienda Multifamiliar</span>
			</h1>
		</div>
	);
};

export default Splash;
