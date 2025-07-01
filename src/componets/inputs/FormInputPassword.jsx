import { Form, Input } from 'antd';
import password_hide from '../assets/svg/password_hide.svg';
import eye from '../assets/svg/eye.svg';
import { useState } from 'react';

export default function FormInputPassword({
	label,
	inputName,
	placeholder,
	required = true,
	inputClassName,
	className,
}) {
	const [passwordVisible, setPasswordVisible] = useState(false);

	return (
		<Form.Item
			rules={[
				{
					required: required,
					message: 'Field is required',
				},
			]}
			className={className}
			extra={<span className='password_help_text'>Use 8 or more characters with a mix of letters, numbers & symbols</span>}
			name={inputName}
			label={
				<div className='w-full fx_btwn_center'>
					<label className='text-[#000000] text-[0.875rem] leading-[1.25rem] font-[400]'>
						{label}
					</label>

					<button
						type='button'
						onClick={() =>
							setPasswordVisible((prevState) => !prevState)
						}
						className='fx_center gap-[.1rem]'>
						{passwordVisible ? (
							<img src={eye} alt='show password' />
						) : (
							<img src={password_hide} alt='hide password' />
						)}

						<label className='text-[#000000] text-[0.875rem] leading-[1.25rem] font-[400]'>
							{passwordVisible ? 'Show' : 'Hide'}
						</label>
					</button>
				</div>
			}>
			<Input.Password
				className={inputClassName}
				variant='borderless'
				iconRender={() => null}
				visibilityToggle={{
					visible: passwordVisible,
					onVisibleChange: setPasswordVisible,
				}}
				placeholder={placeholder}
			/>
		</Form.Item>
	);
}
