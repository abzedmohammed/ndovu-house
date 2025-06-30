import { Input } from 'antd';
import PrimaryBtn from '../componets/buttons/PrimaryBtn';

export default function PaymentInput({
	value,
	onChange,
	loading,
	handlePay
}) {
	return (
		<div className='fx_col gap-[.5rem] w-full'>
			<label>Phone Number</label>
			<div className='relative fx_item_center'>
				<Input
					disabled={loading}
					value={value}
					onChange={(e) => onChange(e.target.value)}
					className={'primary_input'}
					placeholder={'eg 0712345678'}
				/>

				<div className='absolute right-0'>
					<PrimaryBtn disabled={value?.length < 9} isProcessing={loading} handleClick={handlePay} text={'Pay Now'} />
				</div>
			</div>
		</div>
	);
}
