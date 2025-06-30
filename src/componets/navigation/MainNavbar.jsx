import { Link } from 'react-router-dom';
import TextDynamic from '../typrography/TextDynamic';

export default function MainNavbar({ component }) {
	return (
		<>
			<div className='w-full min-h-[6.25rem] bg-white fx_btwn_center flex-wrap gap-[1.25rem] px-[2.5rem] lg:px-[5.81rem] py-[.63rem]'>
				<Link to={'/'} className='fx_center gap-[1.44rem]'>
					<TextDynamic text={'#LOGO'} className={'txt_h1'} tagName='h1' />

					<div
						style={{
							backgroundColor: 'rgba(37, 50, 62, 0.80)',
						}}
						className='w-[0.1875rem] h-[3.125rem] rounded-[2.5rem] hidden lg:block'></div>
					<div className='fx_col text-left'>
						<TextDynamic text={'NDOVU HOUSE'} className={'txt_h4 hidden lg:block'} tagName='h3' />
						<TextDynamic text={'Property Management Platform'} className={'txt_body_sm hidden lg:block'} />
					</div>
				</Link>
				{component}
			</div>
		</>
	);
}
