import { Link } from 'react-router-dom';
import TextDynamic from '../typrography/TextDynamic';

export default function MainNavbar({ component }) {
	return (
		<>
			<div className='w-full h-[6.25rem] bg-white fx_btwn_center px-[2.5rem] lg:px-[5.81rem] py-[.63rem]'>
				<Link to={'/'} className='fx_center gap-[1.44rem]'>
					<TextDynamic text={'#LOGO'} className={'logo_hash'} />

					<div
						style={{
							backgroundColor: 'rgba(37, 50, 62, 0.80)',
						}}
						className='w-[0.1875rem] h-[3.125rem] rounded-[2.5rem] hidden lg:block'></div>
					<div className='fx_col text-center'>
						<TextDynamic text={'NDOVU HOUSE'} className={'logo_text hidden lg:block'} />
						<TextDynamic text={'Property Management Platform'} className={'logo_sub_text hidden lg:block'} />
					</div>
				</Link>
				{component}
			</div>
		</>
	);
}
