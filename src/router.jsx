import { createHashRouter } from 'react-router-dom';
import { ErrorPage, Login, RegisterOptions } from './pages';

import ProtectedRoute from './ProtectedRoute';
import { HomeLayout, HomeLayoutAuth, MainLayout } from './layout';

export const router = createHashRouter([
	{
		path: '/',
		element: <HomeLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: (
					<div className='text-5xl text-center h-screen fx_center font-bold'>
						Home Page
					</div>
				),
			},
		],
	},
	{
		path: 'auth',
		element: <HomeLayoutAuth />,
		errorElement: <ErrorPage />,
		children: [
			{ path: 'login', element: <Login /> },
			{ path: 'registration/options', element: <RegisterOptions /> },
		],
	},
	{
		path: 'admin',
		element: <ProtectedRoute />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: 'dashboard',
				element: <MainLayout />,
				errorElement: <ErrorPage />,
				children: [
					{
						path: '',
						element: <div>Welcome admin</div>,
					},
				],
			},
		],
	},
]);
