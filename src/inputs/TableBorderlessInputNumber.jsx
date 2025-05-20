import { InputNumber } from 'antd';

export default function TableBorderlessInputNumber({
	value,
	inputName,
	recordKey,
	placeholder,
	onChange,
	onBlur = null,
	readOnly,
	suffix = null,
	prefix = null,
}) {
	return (
		<InputNumber
			suffix={suffix ? suffix : null}
			prefix={prefix ? prefix : null}
			readOnly={readOnly}
			value={value}
			onChange={(val) => onChange(val, recordKey, inputName)}
			className={'table_borderless_input'}
			placeholder={placeholder}
			onBlur={onBlur}
		/>
	);
}
