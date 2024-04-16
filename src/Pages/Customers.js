import React from "react";
import { Typography,Space,Table, Avatar} from "antd";
import {useState, useEffect} from "react"; 
import { getCustomers } from "../API/api";

function Customers(){

    const [loading,setLoading] = useState(false);
    const [dataSource,setDataSource] = useState([]);

    useEffect(()=>{
        setLoading(true);
        getCustomers().then(res=>{
            setDataSource(res.users);
            setLoading(false);
        })
    },[])

    const columns = [
        {
            title:"Photo",
            dataIndex:"image",
            render:(link)=>{
                return(<Avatar src={link}/>)
            }
        },
        {
            title:"First Name",
            dataIndex:"firstName"
        },
        {
            title:"Last Name",
            dataIndex:"lastName"
        },
        {
            title:"Email",
            dataIndex:"email"
        },
        {
            title:"Phone",
            dataIndex:"phone"
        },
        {
            title:"Address",
            dataIndex:"address",
            render:(address) => {return(<span>{address.address} , {address.city}</span>)}
        },        
    ]

    return(
        <Space direction="vertical">
            <Typography.Title level={4}>Inventory</Typography.Title>
            <Table dataSource={dataSource} columns={columns} pagination={{pageSize:8}} loading={loading}/>
        </Space>
    );
}

export default Customers