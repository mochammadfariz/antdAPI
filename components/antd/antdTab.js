import { Tabs } from 'antd';
import AntdForm from './antdForm';
import AntdTable from './antdTable';
import FetchAPI from '../fetchAPI';
import React, { useState, useEffect } from 'react';

export default function AntdTabs(){
    const { TabPane } = Tabs;
    const [users,setUsers] = useState([]);

    useEffect(()=>{
        const url = 'https://jsonplaceholder.typicode.com/users'
        fetch(url)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            setUsers(json)
        }
        )
    },[])

    function callback(key) {
    console.log(key);
    }

    const Demo = () => (
    <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Tab 1" key="1">
            <AntdForm/>
        </TabPane>

        <TabPane tab="Tab 2" key="2">
        <AntdTable data={users}/>
        </TabPane>

        <TabPane tab="Tab 3" key="3">
        <FetchAPI></FetchAPI>
        </TabPane>

        <TabPane tab="Tab 4" key="4">
        Content of Tab Pane 4
        </TabPane>
        
    </Tabs>
    );

    return (
    <div>
        <Demo/>
    </div>
    )
}