import { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AppRoute from "./components/route/AppRoute";
import LoginPage from "./pages/LoginPage";
import AccountPage from "./pages/AccountPage";

const App: FC = () => {
	return (
		<>
			<Routes>
				<Route
					path='/'
					element={<Navigate to='/login' />}
				/>
				<Route
					path='login'
					element={
						<AppRoute isProtected={false}>
							<LoginPage />
						</AppRoute>
					}
				/>
				<Route
					path='account'
					element={
						<AppRoute isProtected>
							<AccountPage />
						</AppRoute>
					}
				/>
			</Routes>
		</>
	);
};

export default App;
