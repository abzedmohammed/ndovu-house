import FormInput from '../../../inputs/FormInput';
import FormInputEmail from '../../../inputs/FormInputEmail';
import FormInputPassword from '../../../inputs/FormInputPassword';
import FormInputPhone from '../../../inputs/FormInputPhone';
import FormInputSelect from '../../../inputs/FormInputSelect';

export default function RegistrationOrganizationForm() {
	return (
		<>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-[1rem] w-full xl:w-[33.375rem] mt-[1.25rem]'>
				<FormInput
					inputName={'orgName'}
					label={'Organization Name'}
					required={true}
					className='form_item_white'
				/>

				<FormInputSelect
					inputName={'orgType'}
					label={'Organization Type'}
					required={true}
					className='form_item_white'
				/>

				<FormInput
					inputName={'orgMinistryLicenseNo'}
					label={'Ministry License No.'}
					required={true}
					className='form_item_white'
				/>

				<FormInput
					inputName={'orgOLicenseNo'}
					label={'O License No.'}
					required={true}
					className='form_item_white'
				/>

				<FormInputEmail
					inputName={'orgEmail'}
					label={'Official Email'}
					required={true}
					className='form_item_white'
				/>

				<FormInputSelect
					inputName={'orgCounty'}
					label={'Country'}
					required={true}
					className='form_item_white'
				/>
			</div>

			<div className='my-[1rem]'>
				<span className='registration_admin_header'>
					Person of contact
				</span>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-[1rem] w-full xl:w-[33.375rem]'>
				<FormInput
					inputName={'usrFullNames'}
					label={'Full names'}
					required={true}
					className='form_item_white'
				/>

				<FormInputPhone
					inputName={'usrPhone'}
					label={'Phone number'}
					required={true}
					className='form_item_white'
				/>
			</div>

			<div className='w-full mt-[1rem]'>
			<FormInputPassword
				inputName={'usrPassword'}
				label={'Password'}
				required={true}
				className='form_item_white'
			/>
			</div>
		</>
	);
}
