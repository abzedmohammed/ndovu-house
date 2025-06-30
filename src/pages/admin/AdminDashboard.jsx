import { useQuery } from '@tanstack/react-query';
import { Table } from 'antd';
import { adminFetchAllUsers } from '../../loaders/admin/adminLoader';
import { Link } from 'react-router-dom';

export default function AdminDashboard() {
	
	const { data, isLoading } = useQuery({
		queryKey: adminFetchAllUsers.queryKey,
		queryFn: adminFetchAllUsers.queryFn,
	});

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
					<Link to={`/admin/dashboard/edit/${item}`} type='button'>
						Edit
					</Link>
					<button type='button'>Delete</button>
				</div>
			),
		},
	];

	if (isLoading) {
		return null;
	}

	const tableData = data.data?.data?.result || [];

	return (
		<div>
			<h1>Admin Dashboard</h1>

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
