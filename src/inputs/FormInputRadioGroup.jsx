import { Form, Radio } from 'antd';
import { useEffect, useState } from 'react';

export default function FormInputRadioGroup({
	label,
	inputName,
	className,
	radioValue,
	options,
	onRadioChange = null,
	required = true,
	inputClassName,
}) {
	const [value, setvalue] = useState(radioValue);

	const onChange = (e) => {
		setvalue(e.target.value);
		if (onRadioChange !== null) {
			onRadioChange(e.target.value);
		}
	};

	useEffect(() => {
		setvalue(radioValue);
	}, [radioValue]);

	return (
		<Form.Item
			rules={[
				{
					required: required,
					message: 'Field is required',
				},
			]}
			name={inputName}
			className={className}
			label={label}>
			<Radio.Group className={inputClassName} onChange={onChange} value={value} options={options} />
		</Form.Item>
	);
}
