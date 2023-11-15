import { FC, PropsWithChildren, useState, createContext } from "react";

export interface IAuthContext {
	isAuthenticated: boolean;
	logIn: () => void;
	logOut: () => void;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const authorizationStatus = localStorage.getItem("authStatus");

	const [isAuthenticated, setIsAuthenticated] = useState(
		authorizationStatus ? JSON.parse(authorizationStatus) : false,
	);

	const logIn = () => {
		setIsAuthenticated(true);
		localStorage.setItem("authStatus", JSON.stringify(true));
	};

	const logOut = () => {
		setIsAuthenticated(false);
		localStorage.setItem("authStatus", JSON.stringify(false));
	};

	const authorizationControls = { isAuthenticated, logIn, logOut };

	return <AuthContext.Provider value={authorizationControls}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
