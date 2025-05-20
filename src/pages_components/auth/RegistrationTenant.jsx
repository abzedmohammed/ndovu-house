import useFetch from '../../../custom_hooks/useFetch';
import FormInput from '../../../inputs/FormInput';
import FormInputEmail from '../../../inputs/FormInputEmail';
import FormInputPassword from '../../../inputs/FormInputPassword';
import FormInputPhone from '../../../inputs/FormInputPhone';
import FormInputSelect from '../../../inputs/FormInputSelect';
import { url } from '../../../utils';

export default function RegistrationExpertsForm() {
	const { data, isLoading } = useFetch(
		`${url}/public/v1/common/fetch-professionals`
	);

	return (
		<>
			<div className='w-full'>
				<FormInputSelect
					options={data}
					loading={isLoading}
					inputName={'usrProfession'}
					label={'Profession'}
					className='form_item_white'
					inputClassName={'auth_select'}
				/>
			</div>

			<div className='grid grid-cols-1 lg:grid-cols-2 gap-[1rem] w-full mt-[1rem]'>
				<FormInput
					inputClassName={'auth_input'}
					inputName={'usrFirstname'}
					label={'First name'}
					className='form_item_white'
				/>

				<FormInput
					inputClassName={'auth_input'}
					inputName={'usrLastname'}
					label={'Last name'}
					className='form_item_white'
				/>
			</div>

			<div className='grid grid-cols-1 w-full gap-[1rem] mt-[1rem]'>
				<FormInputEmail
					inputClassName={'auth_input'}
					inputName={'usrEmail'}
					label={'Email address'}
					className='form_item_white'
				/>

				<FormInputPhone
					inputName={'usrMobileNumber'}
					label={'Phone number'}
					className='form_item_white'
				/>

				<FormInput
					inputClassName={'auth_input'}
					inputName={'usrKraPin'}
					label={'KRA PIN'}
					required={false}
					className='form_item_white'
				/>
			</div>

			<div className='grid grid-cols-1 lg:grid-cols-2 gap-[1rem] mt-[1rem]'>
				<FormInput
					inputClassName={'auth_input'}
					inputName={'usrNationalId'}
					label={
						<span>
							ID Number{' '}
							<span className='form_item_label_help_text'>
								(National ID/ Passport)
							</span>
						</span>
					}
					className='form_item_white'
				/>

				<FormInput
					inputClassName={'auth_input'}
					inputName={'usrLicenceNo'}
					label={'License Number'}
					className='form_item_white'
				/>
			</div>

			<div className='w-full fx_col gap-[1rem] mt-[1rem]'>
				<FormInputPassword
					inputClassName={'auth_input'}
					inputName={'usrSecret'}
					label={'Password'}
					className='form_item_white'
				/>
			</div>
		</>
	);
}
