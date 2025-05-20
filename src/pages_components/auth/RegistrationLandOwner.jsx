import { counties, experts } from '../../../data';
import FormInput from '../../../inputs/FormInput';
import FormInputEmail from '../../../inputs/FormInputEmail';
import FormInputPassword from '../../../inputs/FormInputPassword';
import FormInputPhone from '../../../inputs/FormInputPhone';
import FormInputSelect from '../../../inputs/FormInputSelect';

export default function RegistrationOthersForm() {
	return (
		<>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-[1rem] w-full xl:w-[33.375rem] mt-[1.25rem]'>
				<FormInput
					inputName={'usrFullNames'}
					label={'Full names'}
					required={true}
					className='form_item_white'
				/>

				<FormInput
					inputName={'usrNationalId'}
					label={'National ID'}
					required={true}
					className='form_item_white'
				/>

				<FormInputPhone
					inputName={'usrPhone'}
					label={'Phone number'}
					required={true}
					className='form_item_white'
				/>

				<FormInputEmail
					inputName={'usrEmail'}
					label={'Email'}
					required={true}
					className='form_item_white'
				/>

				<FormInput
					inputName={'usrOrgName'}
					label={'Institution Name'}
					required={true}
					className='form_item_white'
				/>

        <FormInputSelect
          options={experts}
					inputName={'usrExpertType'}
					label={'Area of expertise'}
					required={true}
					className='form_item_white'
				/>
			</div>

			<div className='w-full fx_col gap-[1rem] mt-[1rem]'>
        <FormInputSelect
          options={counties}
					inputName={'usrCounty'}
					label={'Country'}
					required={true}
					className='form_item_white'
				/>
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
