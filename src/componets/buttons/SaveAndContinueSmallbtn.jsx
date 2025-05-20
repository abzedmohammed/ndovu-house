import { isLoading } from '../../utils';
import { arrowRightWhiteSvg } from '../svgs';

export default function SaveAndContinueSmallbtn({
	showIcon = true,
	processing,
	disabled,
	onFinish = null,
	text= 'Save & Continue'
}) {
	return (
		<button
			onClick={onFinish}
			disabled={disabled || processing}
			className='save_and_continue_small_btn'
			type='submit'>
			{isLoading(processing, <span>{text}</span>, 'white_spin')}
			{showIcon && arrowRightWhiteSvg}
		</button>
	);
}
