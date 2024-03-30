"use client";
import Link from "next/link";
import { HiOutlineChevronLeft } from "react-icons/hi";

import Style from "./ProjectDetail.module.scss";
import Utils from "@/ui/theme/application/utils/Utils.module.scss";
import ContactForm from "@/ui/pages/contactanos/ui/contactForm";
import { useEffect } from "react";
import { useProjectApplication } from "@/application";

type ProjectDetailProps = {
	projectKey: string;
};

export default function ProjectDetail({ projectKey }: ProjectDetailProps) {
	const { isLoading, findedProject, findProject } = useProjectApplication();

	useEffect(() => {
		findProject(parseInt(projectKey));
	}, [isLoading]);

	if (isLoading || !findedProject) return <></>;

	return (
		<>
			<div className={`${Style.cover}`}>
				<img
					src={findedProject.thumb}
					alt={`Hermosa vista de ${findedProject.name}, un proyecto de ${findedProject.category} de Alex Toro Arquitectos.`}
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
							<p className={`${Style.detail}`}>{findedProject.lenght} m2</p>
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
							<img
								src={image}
								alt={`Hermosa vista de ${findedProject.name}, un proyecto de ${findedProject.category} de Alex Toro Arquitectos.`}
								loading="lazy"
							/>
						</div>
					))}

					<div className={`${Utils.d_flex} ${Utils.justify_center}`}>
						<Link
							href="/portafolio"
							className={`${Utils.button_outline_light} ${Utils.link_outline_off} ${Utils.d_flex} ${Utils.align_center}`}
						>
							<HiOutlineChevronLeft /> <span>Proyectos</span>
						</Link>
					</div>
				</div>
			</main>

			<section>
				<ContactForm />
			</section>
		</>
	);
}
