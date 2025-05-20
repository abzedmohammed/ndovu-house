import { Form } from 'antd';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import flags from 'react-phone-number-input/flags'
import { useState } from 'react';
import select_arrow_fat from '../assets/svg/select_arrow_fat.svg';


export default function FormInputPhone({
	label,
	inputName,
	className,
	required = true,
}) {
	const [value, setValue] = useState('');

	return (
		<Form.Item
			rules={[
				{
					required: required,
					message: 'Field is required',
				},
			]}
			className={className}
			name={inputName}
			label={label}>
			<PhoneInput
				international
                flags={flags}
				defaultCountry='KE'
				value={value}
				onChange={setValue}
				placeholder='Enter phone number'
				countrySelectProps={{
					arrowComponent: () => <img src={select_arrow_fat} alt="select_arrow" />,
				  }}
			/>
		</Form.Item>
	);
}
