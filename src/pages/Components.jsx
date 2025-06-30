import GoBackBtn from '../componets/buttons/GoBackBtn';
import PrimaryBtn from '../componets/buttons/PrimaryBtn';
import SecondaryBtn from '../componets/buttons/SecondaryBtn';
import PageHeaderTitle from '../componets/navigation/PageHeaderTitle';
import TextDynamic from '../componets/typrography/TextDynamic';
import { addUserSvg } from '../svgs';

export default function Components() {
	return (
		<div className='fx_col gap-5 p-10'>
			{/* BUTTONS */}
			<GoBackBtn />
			<PrimaryBtn
				text={'Primary Button'}
				icon={addUserSvg}
				reverse={true}
				showIcon
			/>
			<SecondaryBtn
				text={'Secondary Button'}
				reverse={true}
				disabled={true}
			/>

			{/* TYPOGRAPHY */}
			<TextDynamic text={'Text h1'} className={'txt_h1'} tagName='h1' />
			<TextDynamic text={'Text h2'} className={'txt_h2'} tagName='h2' />
			<TextDynamic text={'Text h3'} className={'txt_h3'} tagName='h3' />
			<TextDynamic text={'Text body xl'} className={'txt_body_xl'} />
			<TextDynamic text={'Text body lg'} className={'txt_body_lg'} />
			<TextDynamic text={'Text body'} className={'txt_body'} />
			<TextDynamic text={'Text body_sm'} className={'txt_body_sm'} />
			<TextDynamic text={'Text body_xs'} className={'txt_body_xs'} />
			<TextDynamic text={'Text body_capt'} className={'txt_body_capt'} />

			{/* PAGE HEADER */}
			<PageHeaderTitle
				showIcon
				showButton
				header={
					<TextDynamic
						text={'Dashboard'}
						className={'txt_h2 !text-[#002777]'}
						tagName='h2'
					/>
				}
				body={
					<TextDynamic
						text={
							'Welcome to the Recognition of Prior Learning Portal'
						}
						className={'txt_body_lg !text-[#949DA5]'}
					/>
				}
				button={
					<PrimaryBtn showIcon={false} text={'Button'} icon={false} />
				}
			/>

			<>
				<header>…site title/nav…</header>
				<main>
					<section>
						<h2>Available Houses</h2>
						<article>…house listing…</article>
						<article>…house listing…</article>
					</section>
					<aside>…filters, tips…</aside>
				</main>
				<footer>…copyright…</footer>
			</>
		</div>
	);
}
