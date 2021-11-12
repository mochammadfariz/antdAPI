import { Table, Tag, Space } from 'antd';

export default function AntdTable(props){
  console.log(props)
  const dataUser = props.data
  console.log(dataUser)

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Phone Number',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'City',
    dataIndex: ['address','city'],
    key: ['address','city'],
  },
  {
    title: 'Website',
    dataIndex: 'website',
    key: 'website',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Company',
    dataIndex: ['company','name'],
    key: ['company','name'],
  },
  // {
  //   title: 'Tags',
  //   key: 'tags',
  //   dataIndex: 'tags',
  //   render: tags => (
  //     <>
  //       {tags.map(tag => {
  //         let color = tag.length > 5 ? 'geekblue' : 'green';
  //         if (tag === 'loser') {
  //           color = 'volcano';
  //         }
  //         return (
  //           <Tag color={color} key={tag}>
  //             {tag.toUpperCase()}
  //           </Tag>
  //         );
  //       })}
  //     </>
  //   ),
  // },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        {/* <a>Invite {record.name}</a> */}
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

return(
    <Table columns={columns} dataSource={dataUser} />
    );
}