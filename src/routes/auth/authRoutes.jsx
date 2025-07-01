import { ErrorPage } from '../../pages';
import AuthAccountVerification from '../../pages/auth/AuthAccountVerification';
import Login from '../../pages/auth/Login';
import RegisterOptions from '../../pages/auth/RegisterOptions';
import { HomeLayoutAuth, LogoLayout } from '../../componets/layout';

export const authRoutes = [
	{
		path: 'auth',
		element: <HomeLayoutAuth />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: 'login',
				element: <Login />,
				// HydrateFallback: () => null,
			},
			{
				path: 'registration/options',
				element: <RegisterOptions />
			},
		],
	},
	{
		path: 'account',
		element: <LogoLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: 'verification',
				element: <AuthAccountVerification />
			},
		],
	},
];
