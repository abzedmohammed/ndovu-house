import { useNavigate } from 'react-router-dom';
import { arrowLefSvg } from '../../svgs';

export default function GoBackbtn() {
	const navigate = useNavigate();

	return (
		<button
			onClick={() => navigate(-1)}
			className='go_back_btn'
			type='button'>
			{arrowLefSvg}
		</button>
	);
}
