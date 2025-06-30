import { Outlet } from 'react-router-dom';
import useToggle from '../custom_hooks/useToggle';
import useAuthCheck from '../custom_hooks/useAuthCheck';
import MainNavbar from '../componets/navigation/MainNavbar';
import UserAvatarNavLink from '../componets/navigation/UserAvatarNavLink';
import SideNavOpen from '../componets/navigation/SideNavOpen';
import SideBarClose from '../componets/navigation/SideBarClose';
import PageHeaderTitle from '../componets/navigation/PageHeaderTitle';
import SessionExpiryModal from '../componets/modals/SessionExpiryModal';

export default function MainLayout() {
	const { toggle, show } = useToggle();
	const isSessionExpired = useAuthCheck();

	return (
		<>
			<nav className='sticky top-0 z-[1000]'>
				<MainNavbar component={<UserAvatarNavLink />} />
			</nav>
			<div className='w-full h-full px-[5.81rem] pt-[2.25rem] pb-[5.25rem]'>
				<div className='fx items-start relative'>
					{!show ? (
						<SideNavOpen toggle={toggle} />
					) : (
						<SideBarClose toggle={toggle} />
					)}
					<div className='w-full h-[100vh] pl-[1.75rem]'>
						<div className='fx_btwn w-full pb-[.5rem] border-b border-[#EBEBEB] pt-[1.5rem]'>
							<PageHeaderTitle />
						</div>
						<Outlet />
					</div>
				</div>
			</div>
			<SessionExpiryModal open={isSessionExpired} />
		</>
	);
}
