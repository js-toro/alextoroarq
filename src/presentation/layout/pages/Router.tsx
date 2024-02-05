import { createBrowserRouter } from 'react-router-dom';

import { Home } from './home';
import { Portfolio } from './portfolio';
import { Services } from './services';
import { About } from './about';
import { Contact } from './contact';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: 'portafolio',
		element: <Portfolio />,
	},
	{
		path: 'servicios',
		element: <Services />,
	},
	{
		path: 'acercade',
		element: <About />,
	},
	{
		path: 'contacto',
		element: <Contact />,
	},
]);
