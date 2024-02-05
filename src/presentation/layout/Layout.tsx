import { RouterProvider } from 'react-router-dom';
import { router } from './pages/Router';

import { Header } from './header';
import { Footer } from './footer';

export const Layout = () => {
	return (
		<>
			<Header />
			<RouterProvider router={router} />
			<Footer />
		</>
	);
};
