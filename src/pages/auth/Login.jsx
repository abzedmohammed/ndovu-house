import { Link } from "react-router-dom";
import { useDynamicMutation } from "../../hooks/useDynamicMutation";
import { loginAction } from "../../actions/auth/authActions";
import GoBackBtn from "../../componets/buttons/GoBackBtn";
import AuthHeader from "../../pages_components/auth/AuthHeader";
import AntdForm from "../../componets/form/AntdForm";
import PrimaryBtn from "../../componets/buttons/PrimaryBtn";
import FormInput from "../../componets/inputs/FormInput";
import FormInputPasswordPlain from "../../componets/inputs/FormInputPasswordPlain";
import FormInputCheckbox from "../../componets/inputs/FormInputCheckbox";
import { Form } from "antd";


export default function Login() {
	const [form] = Form.useForm();

	const mutation = useDynamicMutation({
		mutationFn: loginAction.mutationFn,
		onSuccess: loginAction.onSuccess,
		onError: loginAction.onError,
	});

	const handleSubmit = (values) => {
		mutation.mutate(values);
	};

	return (
		<>
			<div className='w-full px-[5rem] pt-[3rem]'>
				<GoBackBtn />
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
							handleSubmit={handleSubmit}
							formName={'login'}>
							
							{loginBody}

							<PrimaryBtn
								type='submit'
								text='Log In'
								isProcessing={mutation.isPending}
							/>
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

const loginBody = (
	<div className='fx_col w-full md:w-[31rem] gap-[1.12rem] mb-[1.12rem]'>
		<FormInput
			inputClassName={'primary_input'}
			label={'National ID'}
			inputName={'nationalId'}
			placeholder={'National ID'}
		/>

		<FormInputPasswordPlain
			inputClassName={'primary_input'}
			label={'Password'}
			inputName={'password'}
			placeholder='Password'
		/>

		<div className='fx_btwn items-center'>
			<FormInputCheckbox
				label={'Remember me'}
				className={''}
				required={false}
			/>

			<Link className='forgot_pswd' to={'/auth/forgot-password'}>
				Forgot Password?
			</Link>
		</div>
	</div>
);
