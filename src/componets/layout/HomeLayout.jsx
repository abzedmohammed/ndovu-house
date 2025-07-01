import { Outlet } from 'react-router-dom';
import MainNavbar from '../navigation/MainNavbar';
import NavLinks from '../navigation/NavLinks';


export default function HomeLayout() {
	return (
		<>
			<nav className='sticky top-0 z-[500]'>
				<MainNavbar component={<NavLinks />} />
			</nav>
			<Outlet />
		</>
	);
}
