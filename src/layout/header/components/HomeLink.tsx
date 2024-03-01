import Image from 'next/image';
import Link from 'next/link';

export const HomeLink = ({ isRoot }: { isRoot: boolean }) => {
	return (
		<Link className="inline-block mr-auto" href="/">
			<Image
				src={
					isRoot
						? '/assets/icons/logo.png'
						: '/assets/icons/logo_full-color.jpg'
				}
				alt="Logo de Alex Toro Arquitectos"
				width={128}
				height={128}
			/>
		</Link>
	);
};
