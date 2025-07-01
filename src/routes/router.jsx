import { createHashRouter, redirect } from 'react-router-dom';
import { HomeLayout } from '../componets/layout';
import { Components, ErrorPage } from '../pages';
import { authRoutes } from './auth/authRoutes';
import { adminRoutes } from './auth/adminRoutes';

export const protectedLoader = async () => {
	const token = localStorage.getItem('token');
	if (token) return redirect('/admin/dashboard');
	return null;
};

export const router = createHashRouter([
	{
		path: '/',
		element: <HomeLayout />,
		errorElement: <ErrorPage />,
		loader: protectedLoader,
		children: [
			{
				index: true,
				element: <Components />,
			},
		],
	},
	...authRoutes,
	...adminRoutes,
]);
