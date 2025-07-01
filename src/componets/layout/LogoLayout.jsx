import { Navigate, Outlet } from 'react-router-dom';
import MainNavbar from '../navigation/MainNavbar';
import AutoScrollToTop from '../navigation/AutoScrollToTop';

export default function LogoLayout() {
	const token = localStorage.getItem('token');

	if (!token) {
		return <Navigate to='/auth/login' replace />;
	}

	return (
		<>
			<AutoScrollToTop />
				<nav className='sticky top-0 z-[500]'>
					<MainNavbar />
				</nav>
			<Outlet />
		</>
	);
}
