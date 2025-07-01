import TextArea from 'antd/es/input/TextArea';

export default function NormalInputTextArea({
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
			<TextArea
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
