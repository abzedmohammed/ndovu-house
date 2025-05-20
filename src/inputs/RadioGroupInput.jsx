import { Radio } from 'antd';
import { useEffect, useState } from 'react';

export default function RadioGroupInput({
	options,
	radioValue,
	className,
	handleRadioChange,
	disabled,
}) {
	const [value, setvalue] = useState(radioValue);

	const onChange = (e) => {
		setvalue(e.target.value);
		handleRadioChange(e.target.value);
	};

	useEffect(() => {
		setvalue(radioValue);
	}, [radioValue]);

	return (
		<>
			<Radio.Group
				disabled={disabled}
				className={className}
				onChange={onChange}
				value={value}
				options={options}
			/>
		</>
	);
}
