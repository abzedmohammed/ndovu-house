import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MainNavbar from '../navigation/MainNavbar';
import MainNavLinks from '../navigation/NavLinks';
import AutoScrollToTop from '../navigation/AutoScrollToTop';

export default function HomeLayoutAuth() {
	const { isActive } = useSelector((state) => state.auth);

	if (isActive) return <Navigate to='/' replace />;

	return (
		<>
			<AutoScrollToTop />
			<nav className='sticky top-0 z-[500]'>
				<MainNavbar component={<MainNavLinks />} />
			</nav>
			<Outlet />
		</>
	);
}
