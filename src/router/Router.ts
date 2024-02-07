import { createBrowserRouter } from "react-router-dom";

import { Layout } from "../layout";
import { Home, Portfolio, Services, About, Contact } from "../layout/pages";

/**
 * Object that defines all routes of the application
 */
export const router = createBrowserRouter([
	{
		path: "/",
		Component: Layout,
		children: [
			{
				path: "",
				Component: Home,
			},
			{
				path: "portafolio",
				Component: Portfolio,
			},
			{
				path: "servicios",
				Component: Services,
			},
			{
				path: "nosotros",
				Component: About,
			},
			{
				path: "contactanos",
				Component: Contact,
			},
		],
	},
]);
