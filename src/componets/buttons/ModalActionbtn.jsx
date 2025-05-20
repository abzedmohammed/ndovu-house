export default function ModalActionbtn({ handleClick, text, backgroundColor }) {
	return (
        <button
            style={{
                backgroundColor: backgroundColor,
            }}
			className='modal_action_btn'
			type='button'
			onClick={handleClick}>
			{text}
		</button>
	);
}
