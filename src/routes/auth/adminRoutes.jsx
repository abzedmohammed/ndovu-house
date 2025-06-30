import { ErrorPage } from '../../pages';
import { MainLayout } from '../../layout/index';
import ProtectedRoute from '../../ProtectedRoute';
import AdminDashboard from '../../pages/admin/AdminDashboard';
import { AdminUserEdit } from '../../pages/admin';

export const adminRoutes = [
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
						element: <AdminDashboard />,
						// loader: withQueryLoader(adminFetchAllUsers.queryKey, adminFetchAllUsers.queryFn),
						// HydrateFallback: () => <div>Loading</div>,
					},
					{
						path: 'edit/:id',
						element: <AdminUserEdit />,
						loader: null,
					},
				],
			},
		],
	},
];
