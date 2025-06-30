export default function SecondaryBtn({
	handleClick,
	disabled,
	text,
	showIcon = false,
	icon,
	reverse,
	type = 'button',
}) {
	return (
		<button
			style={{
				flexDirection: reverse ? 'row-reverse' : 'row',
			}}
			onClick={handleClick}
			disabled={disabled}
			className='secondary_btn'
			type={type}>
			{text}
			{showIcon && icon}
		</button>
	);
}
