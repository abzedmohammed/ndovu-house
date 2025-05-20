import { Breadcrumb } from 'antd';
import Backbtn from '../componets/buttons/Backbtn';
import separator from '../assets/svg/separator.svg';

export default function BreadCrumb({
	divider,
	back,
	title,
	showIcon,
	titleIcon,
	items = [],
}) {
	return (
		<>
			<div className='fx_col gap-[.12rem]'>
				<div className='fx_item_center gap-[.62rem]'>
					{back ? <Backbtn /> : null}
					<div className='fx_item_center gap-[.75rem]'>
						{showIcon ? (
							<img src={titleIcon} alt='titleIcon' />
						) : null}

						<span className='breadcrumb_title'>{title}</span>
					</div>
				</div>

				<Breadcrumb
					separator={
						<img
							src={separator}
							className='mt-[.21rem]'
							alt='separator'
						/>
					}
					items={items}
				/>

				{divider ? (
					<div className='h-[0.0625rem] w-full bg-[#EEE]'></div>
				) : null}
			</div>
		</>
	);
}
