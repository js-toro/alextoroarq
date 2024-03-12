import useYear from '../application/useYear';
import Utils from '@/ui/theme/application/utils/Utils.module.scss';

const BaseFooter = () => {
	const year = useYear();

	return (
		<footer className={Utils.text_center}>
			<p className={`${Utils.my_xxs} ${Utils.text_bold}`}>Alex Toro Arquitectos S.A.S</p>
			<small>Todos los derechos reservados &copy; {year}</small>
		</footer>
	);
};

export default BaseFooter;
