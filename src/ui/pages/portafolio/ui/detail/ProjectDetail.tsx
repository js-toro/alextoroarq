"use client";
import Link from "next/link";
import { HiOutlineChevronLeft } from "react-icons/hi";

import Style from "./ProjectDetail.module.scss";
import Utils from "@/ui/theme/application/utils/Utils.module.scss";
import ContactForm from "@/ui/pages/contactanos/ui/contactForm";

type ProjectDetailProps = {
	projectKey: string;
};

export default function ProjectDetail({ projectKey }: ProjectDetailProps) {
	return (
		<>
			<div className={`${Style.cover}`}>
				<img src="/assets/images/nosotros/nosotros-1.jpg" alt="Demo" />
			</div>

			<main className={`${Style.main}`}>
				<div className={`${Utils.container} ${Utils.d_grid} ${Utils.gap_lg}`}>
					<div className={`${Style.projectDetail}`}>
						<div>
							<h1>Edificio</h1>
							<p className={`${Style.subheading}`}>Livorno</p>
						</div>

						<div>
							<p className={`${Style.detail}`}>
								Promotor: Constructora Belarrú
							</p>
							<p className={`${Style.detail}`}>2021</p>
							<p className={`${Style.detail}`}>3100 m2</p>
						</div>
					</div>

					<div>
						<p className={`${Utils.text_italic}`}>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Praesentium, reprehenderit qui quisquam ex quidem ad aut,
							dignissimos distinctio quibusdam ut possimus dicta? Voluptatem
							necessitatibus velit, iste rerum maiores dolor quia.
						</p>
					</div>

					{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
						<div key={index}>
							<img
								src="/assets/images/nosotros/nosotros-2.jpg"
								alt="Demo"
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
