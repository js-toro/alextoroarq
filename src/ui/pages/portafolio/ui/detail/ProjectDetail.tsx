"use client";
import Image from "next/image";
import { Fragment, useEffect, useLayoutEffect } from "react";

import Style from "./ProjectDetail.module.scss";
import Utils from "@/ui/theme/application/utils/Utils.module.scss";

import useProject from "@/application/useProject";

type ProjectDetailProps = {
	projectKey: string;
};

export default function ProjectDetail({
	projectKey,
}: ProjectDetailProps): JSX.Element {
	const { isLoading, findedProject, findProject } = useProject();

	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		findProject(parseInt(projectKey));
	}, [isLoading, findedProject, findProject, projectKey]);

	if (isLoading || !findedProject) return <></>;

	return (
		<Fragment>
			<div className={`${Style.cover}`}>
				<Image
					src={findedProject.thumb}
					alt={`Hermosa vista de ${findedProject.name}, un proyecto de ${findedProject.category} de Alex Toro Arquitectos.`}
					width={1920}
					height={66}
					sizes="100vw"
					quality={70}
					style={{
						width: "auto",
						height: "auto",
					}}
					priority
				/>
			</div>

			<main className={`${Style.main}`}>
				<div className={`${Utils.container} ${Utils.d_grid} ${Utils.gap_lg}`}>
					<div className={`${Style.projectDetail}`}>
						<div>
							<h1 className={`${Style.heading}`}>{findedProject.name}</h1>
							<p className={`${Style.subheading}`}>{findedProject.category}</p>
						</div>

						<div>
							<p className={`${Style.detail}`}>{findedProject.builder}</p>
							<p className={`${Style.detail}`}>{findedProject.year}</p>
							<p className={`${Style.detail}`}>{findedProject.length} m²</p>
						</div>
					</div>

					{findedProject.description && (
						<div>
							<p className={`${Utils.text_italic}`}>
								{findedProject.description}
							</p>
						</div>
					)}

					{findedProject.images.map((image, index) => (
						<div key={index}>
							<Image
								className={`${Style.image}`}
								src={image}
								alt={`Hermosa vista de ${findedProject.name}, un proyecto de ${findedProject.category} de Alex Toro Arquitectos.`}
								width={1080}
								height={608}
								sizes="100vw"
								quality={70}
								priority={index === 0}
								style={{
									height: "auto",
								}}
							/>
						</div>
					))}

					{findedProject.virtualTours &&
						findedProject.virtualTours.map((tour, index) => (
							<iframe
								key={index}
								src={tour}
								width={1080}
								height={608}
								className={`${Style.iframe}`}
								allowFullScreen
							/>
						))}

					{findedProject.youtube &&
						findedProject.youtube.map((video, index) => (
							<div key={index} className={`${Style.video}`}>
								<iframe
									width="560"
									height="315"
									src={video}
									title="YouTube video player"
									allowFullScreen
									allow="allowfullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								/>
							</div>
						))}
				</div>
			</main>
		</Fragment>
	);
}
