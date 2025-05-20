import { useNavigate } from 'react-router-dom';
import black_white_arrow from '../../../assets/svg/black_white_arrow.svg';

export default function RegistrationOptionCard({ title, text }) {
	const navigate = useNavigate();

	return (
		<>
			<div
				onClick={() =>
					navigate(`/auth/register?type=${title.toLowerCase()}`)
				}
				className='registration_option_card cursor-pointer'>
				<div className='fx_btwn_center w-full'>
					<h4>{title}</h4>
					<div className='registration_option_radio rounded-full'></div>
				</div>
				<span>{text}</span>

				<img src={black_white_arrow} alt='radio button' />
			</div>
		</>
	);
}
