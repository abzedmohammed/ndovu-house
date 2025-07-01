import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dropdown } from 'antd';
import { logoutStateFn } from '../../features/auth/authSlice';
import { formatPhone } from '../../utils';
import avatar from '../../assets/img/avatar.png';

export default function UserAvatar() {
	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.auth);

	const items = [
		{
			label: (
				<Link
					to='/dashboard/profile'
					className='fx_item_center gap-[.62rem]'>
					<span className='avatar_dropdown_text'>Profile</span>
				</Link>
			),
			key: '1',
		},
		{
			label: (
				<div
					type='button'
					onClick={() => {
						localStorage.removeItem('token');
						dispatch(logoutStateFn())
					}}
					className='fx_item_center gap-[.62rem] pointer'>
					<span className='avatar_dropdown_text'>Log out</span>
				</div>
			),
			key: '2',
		},
	];

	return (
		<div className='fx_center gap-[1rem]'>
			<Dropdown
				overlayStyle={{
					width: '11.4375rem',
					borderRadius: '0.375rem',
					border: '1px solid #F1F1F1',
					background: '#FFF',
					boxShadow: '1px 3px 7px 0px rgba(0, 0, 0, 0.09)',
				}}
				trigger={'click'}
				placement='bottom'
				menu={{
					items,
				}}>
				<div className='fx_item_center gap-[.75rem]'>
					<div className='relative'>
						<img
							className='w-14 h-14 rounded-full'
							src={avatar}
							alt='avatar'
						/>
						<span className='bottom-0 left-0 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full'></span>
					</div>
					<div className='fx_col'>
						<span className='avatar_text'>{user?.email}</span>
						<span className='avatar_sub_text'>
							{formatPhone(user?.phone)}
						</span>
					</div>
				</div>
			</Dropdown>
		</div>
	);
}
