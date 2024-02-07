import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import { Layout } from "../layout";

const Home = lazy(() =>
	import("../layout/pages").then(({ Home }) => ({ default: Home }))
);
const Portfolio = lazy(() =>
	import("../layout/pages").then(({ Portfolio }) => ({ default: Portfolio }))
);
const Services = lazy(() =>
	import("../layout/pages").then(({ Services }) => ({ default: Services }))
);
const About = lazy(() =>
	import("../layout/pages").then(({ About }) => ({ default: About }))
);
const Contact = lazy(() =>
	import("../layout/pages").then(({ Contact }) => ({ default: Contact }))
);

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
