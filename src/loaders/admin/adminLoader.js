import axiosInstance from '../../instance';

export const adminFetchAllUsers = {
	queryKey: ['admin-all-users'],
	queryFn: async () => await axiosInstance.post('/user/all', {}),
};

export const adminFetchUserById = {
	queryKey: (id) => ['admin-user', id],
	queryFn: async ({ queryKey }) => {
		const [, id] = queryKey;
		return await axiosInstance.get(`/user/${id}`);
	},
};

export const adminDeleteUser = {
    queryKey: (id) => ['admin-delete-user', id],
    queryFn: async ({ queryKey }) => {
        const [, id] = queryKey;
        return await axiosInstance.delete(`/user/${id}`);
    },
};