import { useState } from 'react';

export default function OTPInput({ setotp }) {
	const [verificationCode, setVerificationCode] = useState('');

	const handleInputChange = (value) => {
		const cleanValue = value.replace(/[^A-Z0-9]/gi, '').toUpperCase().slice(0, 4);

		setVerificationCode(cleanValue);
		setotp(cleanValue);
	};

	const formattedValue = verificationCode.split('').join(' - ');

	return (
		<>
			<div className='flex items-center justify-center gap-[2rem] py-[1rem]'>
				<input
					autoComplete='off'
					autoCorrect='off'
					autoCapitalize='none'
					spellCheck='false'
					className='otp_input'
					type='text'
					value={formattedValue}
					onChange={(e) => handleInputChange(e.target.value)}
				/>
			</div>
		</>
	);
}
