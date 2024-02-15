import { NextFont } from 'next/dist/compiled/@next/font';
import { Inter, Red_Hat_Display } from 'next/font/google';

const heading = Inter({ subsets: ['latin'] });
const body = Red_Hat_Display({ subsets: ['latin'] });

export type Typography = {
	heading: NextFont;
	body: NextFont;
};

export const typography: Typography = {
	heading,
	body,
};
