import { FC } from "react";
import AuthorizationForm from "../authorization-form/AuthorizationForm";
import Button from "../button/Button";
import FormInput from "../input/FormInput";

const SideBar: FC = () => {
	return (
		<div className='sidebar-container'>
			<AuthorizationForm
				title='Здравствуйте'
				subtext='Требуется авторизация'
			>
				<FormInput
					fieldName='email'
					type='email'
					placeholder='Email'
					icon='mail_input-icon.svg'
					required
				/>
				<FormInput
					fieldName='password'
					type='password'
					placeholder='Пароль'
					icon='password_input-icon.svg'
					required
					minLength={6}
				/>
				<Button
					text='Войти'
					type='submit'
				/>
			</AuthorizationForm>
		</div>
	);
};

export default SideBar;
