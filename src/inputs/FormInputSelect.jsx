import { Form, Select, Spin } from 'antd';
import select_arrow from '../assets/svg/select_arrow.svg';

export default function FormInputSelect({
	label,
	inputName,
	className,
	options = [],
	inputClassName,
	required = true,
	loading = false,
	disabled = false,
	onChange= null,
	suffixIcon = <img src={select_arrow} alt='select_arrow' />,
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
			<Select
				onChange={onChange}
				className={inputClassName}
				disabled={disabled || loading}
				options={options}
				suffixIcon={loading ? <Spin /> : suffixIcon}
			/>
		</Form.Item>
	);
}
