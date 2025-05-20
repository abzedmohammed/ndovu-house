import { InputNumber } from 'antd';

export default function NormalInputNumber({
	label,
    value,
    inputName,
	placeholder,
	inputClassName,
	onChange,
	onBlur = null,
	readOnly
}) {
	return (
		<div className='fx_col gap-[.5rem] w-full'>
			<label>{label}</label>
			<InputNumber
				readOnly={readOnly}
				value={value}
				onChange={val => onChange(val, inputName)}
				className={inputClassName}
				placeholder={placeholder}
				onBlur={onBlur}
			/>
		</div>
	);
}
