import { Outlet } from "react-router-dom";
import { Loading } from "src/components/Loading";

import { Header } from "./header";
import { Footer } from "./footer";
import { Suspense } from "react";

export const Layout = () => {
	return (
		<>
			<Suspense fallback={<Loading />}>
				<Header />
				<Outlet />
				<Footer />
			</Suspense>
		</>
	);
};
