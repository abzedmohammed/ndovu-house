import { Form, Input } from 'antd';

export default function FormInputPasswordPlain({
	label,
	inputName,
	placeholder,
	required = true,
	className,
	inputClassName
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
			<Input.Password className={inputClassName} variant='borderless' placeholder={placeholder} />
		</Form.Item>
	);
}
