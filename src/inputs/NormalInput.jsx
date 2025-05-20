import { Input } from "antd";

export default function NormalInput({
	label,
    value,
    inputName,
	placeholder,
	inputClassName,
	onChange,
	readOnly,
	onBlur = null
}) {
	return (
		<div className='fx_col gap-[.5rem] w-full'>
			<label>{label}</label>
			<Input
				readOnly={readOnly}
				value={value}
				onChange={e => onChange(e.target.value, inputName)}
				className={inputClassName}
				placeholder={placeholder}
				onBlur={onBlur}
			/>
		</div>
	);
}
