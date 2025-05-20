import { isLoading } from '../../utils';
import { arrowRightWhiteSvg } from '../svgs';

export default function Primarybtn({ handleClick, disabled, isProcessing, text, showIcon=true, icon=arrowRightWhiteSvg, reverse }) {
	return (
		<button
			style={{
				flexDirection: reverse ? 'row-reverse' : 'row',
			}}
			onClick={handleClick}
			disabled={disabled || isProcessing}
			className='primary_btn'
			type='button'>
			{isLoading(isProcessing, text, 'white_spin')}
			{showIcon && icon}
		</button>
	);
}
