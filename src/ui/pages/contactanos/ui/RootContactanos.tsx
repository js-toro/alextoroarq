"use client";
import { useLayoutEffect } from "react";
import Image from "next/image";
import Styles from "./RootContactanos.module.scss";
import Utils from "@/ui/theme/application/utils/Utils.module.scss";

const RootContactanos = () => {
	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<section className={`${Styles.cover_wrapper}`}>
			<div>
				<Image
					className={`${Styles.cover}`}
					src="/assets/images/contacto/banner-contacto.jpg"
					alt="Una hermosa vista de un render para un proyecto de Alex Toro Arquitectos"
					width={1920}
					height={720}
					sizes="100vw"
					quality={70}
					style={{
						height: "auto",
					}}
					priority
				/>
			</div>

			<div className={Styles.grid}>
				<div className={`${Styles.title}`}>
					<div>
						<h4>Contacto</h4>
					</div>
				</div>

				<div className={`${Styles.subtitle}`}>
					<span>Somos una firma especializada en Vivienda Multifamiliar</span>
				</div>
			</div>
		</section>
	);
};

export default RootContactanos;
