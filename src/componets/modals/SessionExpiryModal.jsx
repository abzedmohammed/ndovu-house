import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Modal } from 'antd';
import { logoutStateFn } from '../../features/auth/authSlice';

let isActive = true;

export default function SessionExpiryModal({ open }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	function handleSessionExpired() {
		if (isActive) return;
		dispatch(logoutStateFn());
		navigate('/auth/login');
	}

	return (
		<>
			<Modal
				className='primary_modal'
				title='Session Expired'
				centered
				width={500}
				open={open}>
				<div className='primary_modal_title'>
					<span className='primary_modal_title_header'>
						Session Expired
					</span>
					<button
						onClick={handleSessionExpired}
						type='button'
						className='fx flex-shrink-0'>
						<img src={'close_white'} alt='close' />
					</button>
				</div>

				<div className='primary_modal_body'>
					<h2 className='home_feature_card_title'>
						User session expired
					</h2>
					<p className='mt-[1.25rem]'>You have been logged out</p>

					<div className='w-full fx justify-end mt-[1.62rem] gap-[.88rem]'>
						<button
							onClick={handleSessionExpired}
							className='primary_modal_submit_btn'
							type='button'>
							Login
						</button>
					</div>
				</div>
			</Modal>
		</>
	);
}
