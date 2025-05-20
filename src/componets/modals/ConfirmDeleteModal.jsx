import { Modal } from 'antd';
import ModalCancelbtn from '../buttons/ModalCancelbtn';
import ModalActionbtn from '../buttons/ModalActionbtn';

export default function ConfirmDeleteModal({
	header,
	body,
	open,
	handleModalAction,
	handleCancel,
}) {
	return (
		<>
			<Modal
				className='primary_modal'
				title='Session Expired'
				centered
				width={350}
				open={open}>
				<div className='w-full modal_small fx_col gap-[1.38rem]'>
					<span className='modal_header_text'>{header}</span>
					<span className='modal_body_text'>{body}</span>

					<div className='w-full fx_center gap-[.62rem]'>
						<ModalCancelbtn
							handleClick={handleCancel}
							text={'Cancel'}
						/>
						<ModalActionbtn
							handleClick={handleModalAction}
							text={'Delete Section'}
							backgroundColor={'#FB2C36'}
						/>
					</div>
				</div>
			</Modal>
		</>
	);
}
