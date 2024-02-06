import { useLocation } from 'react-router-dom';

/**
 * Returns true if the current location is the home page.
 */
export const useHome = () => {
	const location = useLocation();
	return location.pathname === '/';
};
