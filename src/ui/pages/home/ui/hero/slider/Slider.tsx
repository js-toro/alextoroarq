"use client";
import { useSliderApplication } from "@/application";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

import Styles from "./Slider.module.scss";
import Utils from "@/ui/theme/application/utils/Utils.module.scss";
import Image from "next/image";

const Slider = () => {
	const { isLoading, images, currentImage, handlePrev, handleNext } =
		useSliderApplication();

	if (isLoading) {
		return <></>;
	}

	return (
		<>
			<div
				className={`${Utils.background_tertiary} ${Utils.absolute} ${Utils.position_full} ${Utils.z_index_n100}`}
			>
				{images.map((image: string, index: any) => (
					<Image
						key={index}
						className={`${Styles.highlightedProject} ${
							index == currentImage && Styles.highlightedProjectActive
						}`}
						src={image}
						alt={`Una hermosa vista de un proyecto de Alex Toro Arquitectos`}
						width={1920}
						height={1080}
						sizes="100vw"
						quality={70}
						style={{
							width: "auto",
							height: "auto",
						}}
						priority={index === 0}
					/>
				))}
			</div>

			<div className={Styles.grid}>
				<div className={`${Styles.left_button}`}>
					<button className={`${Styles.controllButton} `} onClick={handlePrev}>
						<HiArrowLeft />
					</button>
				</div>

				<div className={`${Styles.right_button}`}>
					<button className={`${Styles.controllButton}`} onClick={handleNext}>
						<HiArrowRight />
					</button>
				</div>

				<div className={`${Styles.title}`}>
					<span>Arquitectos Especialistas en Vivienda Multifamiliar</span>
				</div>
			</div>
		</>
	);
};

export default Slider;
