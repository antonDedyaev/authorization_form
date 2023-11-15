import useAuth from "@/auth/useAuth";
import { FC, PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

type IAppRoute = {
	isProtected: boolean;
} & PropsWithChildren;

const AppRoute: FC<IAppRoute> = ({ isProtected, children }) => {
	const { isAuthenticated } = useAuth();

	switch (isProtected) {
		case true:
			return isAuthenticated ? children : <Navigate to='/login' />;
		case false:
			return children;
		default:
			return children;
	}
};
export default AppRoute;
