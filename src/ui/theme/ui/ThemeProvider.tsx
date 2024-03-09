import '../application/styles.scss';
import { heading, body } from '@/ui/theme/domain/fonts';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	return <body className={`${heading.variable} ${body.variable}`}>{children}</body>;
};

export default ThemeProvider;
