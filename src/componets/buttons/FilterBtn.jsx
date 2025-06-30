import { Dropdown } from 'antd';
import filter from '../../assets/svg/filter.svg';

export default function FilterBtn({ className='filter_btn' }) {
	const handleMenuClick = (e) => {
		console.log('click', e);
	};

	const items = [
		{
			label: '1st menu item',
			key: '1',
		},
		{
			label: '2nd menu item',
			key: '2',
		},
	];

	const menuProps = {
		items,
		onClick: handleMenuClick,
	};

	return (
		<>
			<div className={className}>
				<Dropdown trigger={'click'} placement='bottom' menu={menuProps}>
					<button
						className='fx_item_center gap-[.625rem]'
						type='button'>
						<img src={filter} alt='filter' />
						<span>Filter</span>
					</button>
				</Dropdown>
			</div>
		</>
	);
}
