import { useQuery } from '@tanstack/react-query';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import { onError } from '../../dynamicFns';
import TextDynamic from '../../componets/typrography/TextDynamic';
import { adminDeleteUserById, adminFetchAllUsers } from '../../actions/admin/adminActions';
import { useDynamicMutation } from '../../hooks/useDynamicMutation';

export default function AdminDashboard() {
	const { data, isLoading } = useQuery({
		queryKey: adminFetchAllUsers.queryKey,
		queryFn: adminFetchAllUsers.queryFn,
	});

	const deleteMutation = useDynamicMutation({
		mutationFn: adminDeleteUserById.mutationFn,
		onError: onError,
		invalidateQueryKeys: [adminFetchAllUsers.queryKey],
	});

	const handleDelete = (userId) => {
		deleteMutation.mutate(userId);
	};

	const columns = [
		{
			title: 'Name',
			dataIndex: 'usrFirstName',
		},
		{
			title: 'Email',
			dataIndex: 'usrEmail',
		},
		{
			title: 'Phone Number',
			dataIndex: 'usrPhone',
		},
		{
			title: 'National ID',
			dataIndex: 'usrNationalId',
		},
		{
			title: 'Action',
			fixed: 'right',
			dataIndex: 'usrId',
			render: (item) => (
				<div className='fx_item_center gap-[.5rem]'>
					<Link to={`/admin/dashboard/edit/${item}`}>Edit</Link>

					<button onClick={() => handleDelete(item)} type='button'>
						Delete
					</button>
				</div>
			),
		},
	];

	if (isLoading) {
		return null;
	}

	const tableData = data?.data?.data?.result || [];

	return (
		<div>
			<TextDynamic
				text={'Admin Dashboard'}
				className={'txt_h3'}
				tagName='h3'
			/>

			<Table
				loading={isLoading}
				bordered
				scroll={{
					x: scroll,
				}}
				pagination={{
					defaultPageSize: 7,
					hideOnSinglePage: true,
					pageSizeOptions: [7, 20, 50, 100],
				}}
				rowKey={'usrId'}
				columns={columns}
				dataSource={tableData}
			/>
		</div>
	);
}
