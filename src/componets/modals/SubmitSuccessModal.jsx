import { Modal } from 'antd';
import ModalActionbtn from '../buttons/ModalActionbtn';

export default function SubmitSuccessModal({
	header,
	body,
	open,
	handleModalAction,
}) {
	return (
		<>
			<Modal
				className='primary_modal'
				title='Session Expired'
				centered
				width={'31.25rem'}
				open={open}>
				<div className='w-full modal_small fx_col gap-[1.38rem]'>
					{header}
					<span className='modal_success_body_text'>{body}</span>

					<div className='w-full fx_center gap-[.62rem]'>
						<ModalActionbtn
							handleClick={handleModalAction}
							text={'Back to dashboard'}
							backgroundColor={'#2CB852'}
						/>
					</div>
				</div>
			</Modal>
		</>
	);
}
