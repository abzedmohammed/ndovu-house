import { useNavigate } from 'react-router-dom';
import { arrowLefSvg } from '../../svgs';

export default function GoBackBtn({ handleClick = null, text }) {
	const navigate = useNavigate();

	return (
		<button
			onClick={() => (handleClick ? handleClick() : navigate(-1))}
			className='go_back_btn'
			type='button'>
			{arrowLefSvg}
			{text && <span>{text}</span>}
		</button>
	);
}
