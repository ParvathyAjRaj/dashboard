import React from "react";
import { Typography,Space,Table, Avatar } from "antd";
import { useState, useEffect} from "react"; 
import { getOrders } from "../API/api";

function Orders(){

    const [loading,setLoading] = useState(false);
    const [dataSource,setDataSource] = useState([]);

    useEffect(()=>{
        setLoading(true);
        getOrders().then(res=>{
            setDataSource(res.products);
            setLoading(false);
        })
    },[])

    const columns = [
        {
            title:"Thumbnail",
            dataIndex:"thumbnail",
            render:(link)=>{
                return(<Avatar src={link}/>)
            }
        },
        {
            title:"Title",
            dataIndex:"title"
        },
        {
            title:"Price",
            dataIndex:"price",
            render:(value) => {return(<span>${value}</span>)}
        },
        {
            title:"Quantity",
            dataIndex:"quantity",
        },
        {
            title:"Total Price",
            dataIndex:"total",
            render:(value)=> {return(<span>${value}</span>)},
        },
        {
            title:"Discounted Price",
            dataIndex:"discountedPrice",
            render:(value) => {return(<span>${value}</span>)}
        },        
    ]

    return(
        <Space direction="vertical">
            <Typography.Title level={4}>Orders</Typography.Title>
            <Table dataSource={dataSource} columns={columns} pagination={{pageSize:10}} loading={loading}/>
        </Space>
    );
}

export default Orders