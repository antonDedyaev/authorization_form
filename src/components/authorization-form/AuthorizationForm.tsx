import useAuth from "@/auth/useAuth";
import mockAuthorizeUser from "@/services/mockedAuth.service";
import { FC, PropsWithChildren, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

type AuthorizationForm = {
	title?: string;
	subtext?: string;
} & PropsWithChildren;

const AuthorizationForm: FC<AuthorizationForm> = ({ title, subtext, children }) => {
	const { logIn } = useAuth();
	const navigate = useNavigate();

	const onSubmitHandler = async (e: MouseEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.target as HTMLFormElement);
		const email = formData.get("email") as string;
		const password = formData.get("password") as string;

		const authorizeStatus = await mockAuthorizeUser(email, password);
		if (authorizeStatus) {
			logIn();
			navigate("/account");
		}
	};
	return (
		<div className='auth-container'>
			<h2>{title}</h2>
			<p>{subtext}</p>
			<form onSubmit={onSubmitHandler}>{children}</form>
		</div>
	);
};

export default AuthorizationForm;
