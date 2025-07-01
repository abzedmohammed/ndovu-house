import { Form, Select, Spin } from 'antd';
import { selectArrowSvg } from '../svgs';

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
	suffixIcon = selectArrowSvg,
	placeholder,
	showSearch,
	mode = null,
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
				placeholder={placeholder}
				mode={mode}
				maxTagCount={1}
				onChange={onChange}
				showSearch={showSearch}
				className={inputClassName}
				disabled={disabled || loading}
				options={options}
				suffixIcon={loading ? <Spin /> : suffixIcon}
				filterOption={(input, option) =>
					(option?.label?.toLocaleLowerCase() ?? '').includes(
						input?.toLocaleLowerCase()
					)
				}
				filterSort={(optionA, optionB) =>
					(optionA?.label ?? '')
						.toLowerCase()
						.localeCompare((optionB?.label ?? '').toLowerCase())
				}
			/>
		</Form.Item>
	);
}
