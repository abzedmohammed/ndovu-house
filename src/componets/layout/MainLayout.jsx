import { Outlet } from "react-router-dom";
import useAuthCheck from "../../hooks/useAuthCheck";
import useToggle from "../../hooks/useToggle";
import MainNavbar from "../navigation/MainNavbar";
import SideBarClose from "../navigation/SideBarClose";
import SideNavOpen from "../navigation/SideNavOpen";
import UserAvatarNavLink from "../navigation/UserAvatar";
import SessionExpiryModal from "../modals/SessionExpiryModal";


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
					<div className='w-full max-w-full h-[100vh] pl-[1.75rem]'>
						<Outlet />
					</div>
				</div>
			</div>
			<SessionExpiryModal open={isSessionExpired} />
		</>
	);
}
