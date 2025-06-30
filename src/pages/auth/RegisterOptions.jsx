import { UserOutlined, HomeFilled, BankOutlined } from '@ant-design/icons';
import AuthOptionCard from '../../pages_components/auth/AuthOptionCard';
import GoBackBtn from '../../componets/buttons/GoBackBtn';
import AuthHeader from '../../pages_components/auth/AuthHeader';

const options = [
	{
		label: 'Tenant',
		link: 'tenant',
		icon: <UserOutlined className='!text-white !text-[1.2rem]' />,
	},
	{
		label: 'Landowner',
		link: 'landowner',
		icon: <HomeFilled className='!text-white !text-[1.2rem]' />,
	},
	{
		label: 'Agency/Organization',
		link: 'agency',
		icon: <BankOutlined className='!text-white !text-[1.2rem]' />,
	},
];

export default function RegisterOptions() {
	return (
		<>
			<div className='w-full px-[5rem] pt-[3rem]'>
				<GoBackBtn />
			</div>
			<div className='w-full h-full fx_center'>
				<div className='auth_option_main_card'>
					<AuthHeader
						authTitle={'Choose Account'}
						authSubtitle={'Choose your account type'}
					/>

					<div className='fx_item_center flex-wrap gap-7'>
						{options.map((item, index) => (
							<AuthOptionCard
								key={index}
								link={`/auth/registration/${item.link}`}
								icon={item.icon}
								label={item.label}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
