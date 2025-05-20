export default function ModalCancelbtn({ handleClick, text }) {
	return (
		<button
			className='modal_cancel_btn'
			type='button'
			onClick={handleClick}>
			{text}
		</button>
	);
}
