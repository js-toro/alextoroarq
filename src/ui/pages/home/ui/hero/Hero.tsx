import Utils from "@/ui/theme/application/utils/Utils.module.scss";

import Slider from "./slider";

export default function Hero(): JSX.Element {
	return (
		<section className={`${Utils.relative} ${Utils.size_dfull}`}>
			<Slider />
		</section>
	);
}
