import { useQuery } from '@tanstack/react-query';
import { Descriptions } from 'antd';
import { useParams } from 'react-router-dom';
import { adminFetchUserById } from '../../loaders/admin/adminLoader';

export default function AdminUserEdit() {
	const { id } = useParams();

	const {
		data: user,
		isLoading,
		error,
	} = useQuery({
		queryKey: adminFetchUserById.queryKey(id),
		queryFn: adminFetchUserById.queryFn,
		enabled: !!id, // Only run query if ID exists
	});

	if (isLoading) return <div>Loading user...</div>;
	if (error) return <div>Error: {error.message}</div>;
    if (!user) return <div>User not found</div>;
    
   const userData = user.data?.data?.result || []; 
    

	const items = [
		{
			key: '1',
			label: 'UserName',
			children: userData?.usrFirstName,
		},
		{
			key: '2',
			label: 'Telephone',
			children: userData?.usrPhone,
		},
		{
			key: '3',
			label: 'National ID',
			children: userData?.usrNationalId,
		},
		{
			key: '4',
			label: 'Email',
			children: userData?.usrEmail,
		},
	];

	return <Descriptions title='User Info' items={items} />;
}
