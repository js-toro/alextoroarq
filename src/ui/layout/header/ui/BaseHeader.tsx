'use client';
import { usePathname } from 'next/navigation';
import { useLogo } from '@/application';

import Styles from './BaseHeader.module.scss';
import MobileNav from './mobileNav';
import DesktopNav from './desktopNav';
import Link from 'next/link';
import Image from 'next/image';

const BaseHeader = () => {
	const pathname = usePathname();
	const logo = useLogo(pathname);

	return (
		<header className={`${Styles.header} ${pathname === '/' ? Styles.header_home : ''}`}>
			<Link href="/" className={Styles.header_logo}>
				<Image
					src={logo}
					alt="Logo de Alex Toro Arquitectos"
					width={128}
					height={50}
					quality={100}
				/>
			</Link>

			<MobileNav />
			<DesktopNav />
		</header>
	);
};

export default BaseHeader;
