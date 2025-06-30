import { Modal } from 'antd';
import { closeRedSvg } from '../../svgs';
import SecondaryBtn from '../buttons/SecondaryBtn';
import PrimaryBtn from '../buttons/PrimaryBtn';

export default function PrimaryModal({
	header,
	body = 'MODAL BODY CONTENT',
	open,
	handleModalAction,
	handleCancel,
	width,
	actionText = 'Submit',
	showLine,
	isProcessing,
	hideActionBtn,
	handleOpenChange = () => {},
}) {
	return (
		<>
			<Modal
				afterOpenChange={(visible) => {
					if (visible) {
						handleOpenChange()
					}
				}}
				onCancel={handleCancel}
				className='primary_modal'
				title='Session Expired'
				centered
				width={width ?? '57.8125rem'}
				open={open}>
				<div className='w-full fx_btwn items-start p-[2.5rem] border-b border-[#DBE1EE]'>
					{header}
					<button onClick={handleCancel} type='button'>
						{closeRedSvg}
					</button>
				</div>
				<div className='primary_modal_body'>
					{body}

					{hideActionBtn ? null : (
						<div
							style={{
								borderTop: showLine
									? '1px solid #DBE1EE'
									: 'none',
							}}
							className='w-full fx justify-end gap-[.62rem] pt-[2.5rem]'>
							<SecondaryBtn
								disabled={isProcessing}
								text={'Cancel'}
								handleClick={handleCancel}
							/>
							<PrimaryBtn
								isProcessing={isProcessing}
								text={actionText}
								handleClick={handleModalAction}
							/>
						</div>
					)}
				</div>
			</Modal>
		</>
	);
}
