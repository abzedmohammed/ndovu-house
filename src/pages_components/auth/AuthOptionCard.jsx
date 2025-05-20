import { Link } from 'react-router-dom';
import { arrowRightWhiteSvg } from '../../svgs';
import TextDynamic from '../../componets/typrography/TextDynamic';

export default function AuthOptionCard({ link, icon, label }) {
	return (
		<Link to={link} type='button' className='auth_option_card'>
			<div className='w-full fx_item_center gap-[.62rem]'>
				{icon}
				<TextDynamic text={label} className={'auth_option_card_text'} />
			</div>

			<div className='w-full h-full fx justify-end'>
				<div className='w-[2.5rem] h-[2.5rem] self-center fx_center p-1 rounded-full border-2 border-white'>
					{arrowRightWhiteSvg}
				</div>
			</div>
		</Link>
	);
}
