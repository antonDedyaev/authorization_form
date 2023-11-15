import { FC } from "react";
import Button from "../button/Button";
import useAuth from "@/auth/useAuth";

const LogoutForm: FC = () => {
	const { logOut } = useAuth();

	const handleLogout = () => {
		logOut();
	};

	return (
		<div className='logout-container'>
			<h1>Личный кабинет</h1>
			<p>Добро пожаловать в личный кабинет</p>
			<Button
				text='Выйти'
				type='button'
				onClick={handleLogout}
			/>
		</div>
	);
};

export default LogoutForm;
