import { Link } from 'react-router-dom';
import { addUserSvg } from '../../svgs';

export default function MainNavLinks() {
	return (
		<div className='fx_center flex-wrap gap-[.94rem]'>
			<Link
				to={'/auth/registration/options'}
				className='register_btn'
				type='button'>
				{addUserSvg}
				<span>Register</span>
			</Link>
			<Link to={'/auth/login'} className='login_btn' type='button'>
				Log in
			</Link>
		</div>
	);
}
