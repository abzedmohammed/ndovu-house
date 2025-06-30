import { isLoading } from '../../utils';

export default function PrimaryBtn({
	handleClick,
	disabled,
	isProcessing,
	text,
	showIcon,
	icon,
	reverse,
	type = 'button',
	width,
}) {
	return (
		<button
			style={{
				flexDirection: reverse ? 'row-reverse' : 'row',
				width: width || 'fit-content',
			}}
			onClick={handleClick}
			disabled={disabled || isProcessing}
			className='primary_btn'
			type={type}>
			{isLoading(isProcessing, text, 'white_spin')}
			{showIcon && icon}
		</button>
	);
}
