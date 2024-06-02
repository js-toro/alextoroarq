"use client";
import Image from "next/image";
import Link from "next/link";

import Styles from "./BaseHeader.module.scss";
import Utils from "@/ui/theme/application/utils/Utils.module.scss";

import MobileNav from "./mobileNav";
import DesktopNav from "./desktopNav";

export default function BaseHeader(): JSX.Element {
	return (
		<header className={`${Styles.header}`}>
			<div className={`${Styles.container} ${Utils.container}`}>
				<Link
					href="/"
					className={`${Styles.header_logo} ${Utils.link_outline_off}`}
				>
					<Image
						src="/assets/icons/logo.png"
						alt="Logo de Alex Toro Arquitectos"
						width={128}
						height={50}
						quality={70}
						priority
					/>
				</Link>

				<MobileNav />
				<DesktopNav />
			</div>
		</header>
	);
}
