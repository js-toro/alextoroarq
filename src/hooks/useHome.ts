import { useLocation } from 'react-router-dom';

const useHome = () => {
	const location = useLocation();
	return location.pathname === '/';
};

export default useHome;
