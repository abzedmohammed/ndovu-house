import { Link } from 'react-router-dom';
import GoBackbtn from '../componets/buttons/GoBackbtn';
import AntdForm from '../componets/form/AntdForm';
import FormInput from '../inputs/FormInput';
import FormInputCheckbox from '../inputs/FormInputCheckbox';
import FormInputPasswordPlain from '../inputs/FormInputPasswordPlain';
import { isLoading } from '../utils';
import AuthHeader from '../pages_components/auth/AuthHeader';
import { Form } from 'antd';

export default function Login() {
	const [form] = Form.useForm();

	return (
		<>
			<div className='w-full px-[5rem] pt-[3rem]'>
				<GoBackbtn />
			</div>
			<div className='w-full h-full fx_center p-5 xl:p-0'>
				<div className='auth_option_main_card'>
					<AuthHeader
						authTitle={'Log In'}
						authSubtitle={'Log in to an your account'}
					/>
					<div className='fx_col w-full md:w-[31rem] gap-[1.12rem]'>
						<AntdForm
							form={form}
							handleSubmit={() => {}}
							formName={'login'}>
							<FormInput
								inputClassName={'primary_input'}
								label={'National ID'}
								inputName={'userNationalId'}
								placeholder={'National ID'}
							/>
							<FormInputPasswordPlain
								inputClassName={'primary_input'}
								className='!mt-[1.12rem]'
								label={'Password'}
								inputName={'password'}
								placeholder='Password'
							/>

							<div className='fx_btwn items-center'>
								<FormInputCheckbox
									label={'Remember me'}
									inputName={'usrRemember'}
									className={''}
									required={false}
								/>

								<Link
									className='forgot_pswd'
									to={'/auth/forgot-password'}>
									Forgot Password?
								</Link>
							</div>

							<button
								className='primary_btn mt-[2.5rem]'
								type='submit'>
								{isLoading(false, 'Sign in', 'white_spin')}
							</button>
						</AntdForm>

						<div className='register_main_text'>
							Don't have an account?{' '}
							<Link
								to={'/auth/registration/options'}
								className='text-[#1E40AF]'>
								Register here
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
