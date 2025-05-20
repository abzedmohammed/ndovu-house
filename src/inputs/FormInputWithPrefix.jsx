import { Form, Input } from 'antd';
import location_dark from '../assets/svg/location_dark.svg';

export default function FormInputWithPrefix({
	label,
	inputName,
	placeholder,
	className,
	required = true,
	inputClassName,
	prefix = <img src={location_dark} alt='search' />,
}) {
	return (
		<Form.Item
			// validateStatus='error'
			// help={false}
			rules={[
				{
					required: required,
					message: 'Field is required',
				},
			]}
			name={inputName}
			className={className}
			label={label}>
			<Input
				prefix={prefix}
				className={inputClassName}
				placeholder={placeholder}
			/>
		</Form.Item>
	);
}
