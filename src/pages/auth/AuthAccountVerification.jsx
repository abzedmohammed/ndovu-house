import { Link } from 'react-router-dom';
import GoBackBtn from '../../componets/buttons/GoBackBtn';
import AntdForm from '../../componets/form/AntdForm';
import FormInputCheckbox from '../../inputs/FormInputCheckbox';
import AuthHeader from '../../pages_components/auth/AuthHeader';
import { Form } from 'antd';
import PrimaryBtn from '../../componets/buttons/PrimaryBtn';
import { useDynamicMutation } from '../../custom_hooks/useDynamicMutation';
import {
	accountResendOtp,
	accountVerification,
} from '../../loaders/auth/authActions';
import OTPInput from '../../inputs/OTPInput';
import { useEffect, useState } from 'react';
import TextDynamic from '../../componets/typrography/TextDynamic';
import { successNotification } from '../../componets/notifications/toastNotification';

export default function AuthAccountVerification() {
	const [form] = Form.useForm();

	const [otp, setotp] = useState('');
	const [timer, setTimer] = useState(10);

	const mutation = useDynamicMutation({
		mutationFn: accountVerification.mutationFn,
		onSuccess: accountVerification.onSuccess,
		onError: accountVerification.onError,
	});

	const mutationAlt = useDynamicMutation({
		mutationFn: accountResendOtp.mutationFn,
		onSuccess: () => {
			setTimer(10)
			successNotification({
				id: 1,
				message: 'OTP sent successfully',
			})
		},
		onError: accountResendOtp.onError,
	});

	const handleSubmit = () => {
		mutation.mutate(otp);
	};

	useEffect(() => {
		let interval = null;

		if (timer > 0) {
			interval = setInterval(() => {
				setTimer((prev) => prev - 1);
			}, 1000);
		} else {
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [timer]);

	return (
		<>
			<div className='w-full px-[5rem] pt-[3rem]'>
				<GoBackBtn />
			</div>
			<div className='w-full h-full fx_center p-5 xl:p-0'>
				<div className='auth_option_main_card'>
					<AuthHeader
						authTitle={'Account Verification'}
						authSubtitle={
							'Enter the 4 digit code sent your email/phone'
						}
					/>
					<div className='fx_col w-full md:w-[31rem] gap-[1.12rem]'>
						<AntdForm
							form={form}
							handleSubmit={handleSubmit}
							formName={'account-verification'}>
							<div className='fx_col w-full md:w-[31rem] mb-[1.12rem]'>
								<OTPInput setotp={setotp} />

								<div className='fx_btwn items-center'>
									<TextDynamic
										text={
											timer > 0
												? `Resend OTP in 00:${
														timer < 10
															? '0' + timer
															: timer
												  }`
												: '00:00'
										}
										className={'cd_body_lg'}
									/>

									<button
										disabled={
											timer > 0 || mutationAlt.isPending
										}
										onClick={mutationAlt.mutate}
										type='button'>
										<TextDynamic
											text={'Resend OTP'}
											className={
												'cd_body_lg !text-[#1E3A8A]'
											}
										/>
									</button>
								</div>
							</div>

							<PrimaryBtn
								disabled={otp.length != 4}
								type='submit'
								text='Verify'
								isProcessing={mutation.isPending}
							/>
						</AntdForm>
					</div>
				</div>
			</div>
		</>
	);
}
