import { useSelector } from 'react-redux';

export default function PageHeaderTitle() {
	const { activePageTitle } = useSelector((state) => state.global);

	return (
		<>
			<span className='page_header_text w-full'>
				{String(activePageTitle).toString() ?? 'GWIS Ke'}
			</span>
		</>
	);
}
