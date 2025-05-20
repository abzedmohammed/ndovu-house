import { bluePenSvg } from "../svgs";

export default function Editbtn({ handleClick }) {
	return (
		<button onClick={handleClick} className='edit_btn' type='button'>
			{bluePenSvg}
			Edit
		</button>
	);
}
