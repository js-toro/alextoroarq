'use client';
import { usePathname } from 'next/navigation';
import { HomeLink, DesktopMenu, MobileMenu } from './components';

function HeaderLayout() {
	const path = usePathname();

	return (
		<header
			className={`w-full p-8 lg:px-24 lg:py-12 flex items-center ${
				path === '/' && 'absolute inset-x-0 z-50'
			} `}>
			<HomeLink isRoot={path === '/'} />

			<nav className="relative">
				<DesktopMenu isRoot={path === '/'} />
				<MobileMenu isRoot={path === '/'} />
			</nav>
		</header>
	);
}

export default HeaderLayout;
