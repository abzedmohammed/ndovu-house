import { Outlet } from 'react-router-dom';
import MainNavbar from '../componets/navigation/MainNavbar';
import UserAvatarNavLink from '../componets/navigation/UserAvatarNavLink';
import MainNavLinks from '../componets/navigation/MainNavLinks';

export default function HomeLayout() {
	return (
		<>
			<nav className='sticky top-0 z-[500]'>
				<MainNavbar component={<MainNavLinks />} />
			</nav>
			<Outlet />
		</>
	);
}
