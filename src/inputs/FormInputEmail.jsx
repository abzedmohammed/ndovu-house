import { Form, Input } from 'antd';

export default function FormInputEmail({
	label,
	inputName,
	placeholder,
	className,
	inputClassName,
	required = true,
}) {
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
			<Input className={inputClassName} type='email' placeholder={placeholder} />
		</Form.Item>
	);
}
