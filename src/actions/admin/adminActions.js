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

export const adminDeleteUserById = {
    queryKey: (id) => ['admin-delete-user', id],
    mutationFn: async (id) => {
        return await axiosInstance.delete(`/user/${id}`);
    },
};