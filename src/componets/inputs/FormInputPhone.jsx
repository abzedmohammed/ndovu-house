import { Form } from 'antd';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import flags from 'react-phone-number-input/flags'
import { useState } from 'react';
import { selectArrowSvg } from '../svgs';


export default function FormInputPhone({
	label,
	inputName,
	className,
	required = true,
	inputClassName
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
				className={inputClassName}
				international
                flags={flags}
				defaultCountry='KE'
				value={value}
				onChange={setValue}
				placeholder='Enter phone number'
				countrySelectProps={{
					arrowComponent: () => selectArrowSvg,
				  }}
			/>
		</Form.Item>
	);
}
