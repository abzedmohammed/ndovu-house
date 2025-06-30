import { modalInfoSvg } from '../../svgs';
import ModalHeader from '../navigation/ModalHeader.jsx';
import TextDynamic from '../typrography/TextDynamic.jsx';
import PrimaryModal from './PrimaryModal.jsx';

export default function DeleteModal({
	open,
	handleCloseModal,
	handleDelete,
	deleteMainText = 'Are you sure you want to Delete this course',
	deleteText,
	isProcessing,
}) {
	return (
		<PrimaryModal
			open={open}
			handleCancel={handleCloseModal}
			handleModalAction={handleDelete}
			header={
				<ModalHeader
					icon={modalInfoSvg}
					showIcon
					header={'Confirm Action'}
				/>
			}
			body={
				<TextDynamic
					text={
						<span>
							{deleteMainText}{' '}
							<span className='!text-[#CB9B50]'>
								{deleteText}
							</span>
							?
						</span>
					}
					className={'cd_body'}
				/>
			}
			width={'43.5625rem'}
			actionText={'Delete'}
			isProcessing={isProcessing}
		/>
	);
}
