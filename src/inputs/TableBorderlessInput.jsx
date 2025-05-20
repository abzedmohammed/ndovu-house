import { Input } from 'antd';

export default function TableBorderlessInput({
	value,
    inputName,
    recordKey,
	placeholder,
	onChange,
	onBlur = null,
	readOnly
}) {
	return (
		<Input
			readOnly={readOnly}
			value={value}
			onChange={(e) => onChange(e.target.value, recordKey, inputName)}
			className={'table_borderless_input'}
			placeholder={placeholder}
			onBlur={onBlur}
		/>
	);
}
