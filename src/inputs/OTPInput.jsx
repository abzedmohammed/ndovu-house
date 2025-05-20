import { useRef, useState } from 'react';

export default function OTPInput({ setotp }) {
	const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

	const [verificationCode, setVerificationCode] = useState(['', '', '', '']);

	const handleInputChange = (e, index) => {
		const { value } = e.target;

		if (value === '') {
			if (index > 0) {
				inputRefs[index - 1].current.focus();
			}
		} else if (index < inputRefs.length - 1) {
			inputRefs[index + 1].current.focus();
		}

		const updatedVerificationCode = [...verificationCode];
		updatedVerificationCode[index] = value;
        setVerificationCode(updatedVerificationCode);
        setotp(updatedVerificationCode.join(''));
	};

	const handleKeyDown = (e, index) => {
		if (e.key === 'Backspace' && !verificationCode[index] && index > 0) {
			inputRefs[index - 1].current.focus();
		}
	};

	return (
		<>
			<div className='flex items-center justify-center gap-[1.75rem]'>
				{inputRefs?.map((ref, index) => (
					<div key={index}>
						<input
							autoComplete="off"
							autoCorrect="off"
							autoCapitalize="none"
							spellCheck="false"
							ref={ref}
							className='otp_input'
							type='text'
							maxLength='1'
							value={verificationCode[index]}
							onKeyDown={(e) => handleKeyDown(e, index)}
							onChange={(e) => handleInputChange(e, index)}
						/>
					</div>
				))}
			</div>
		</>
	);
}
