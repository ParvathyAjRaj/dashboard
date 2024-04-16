import React from "react";
import { Typography,Space,Table, Avatar,Rate } from "antd";
import {useState, useEffect} from "react"; 
import { getInventory } from "../API/api";

function Inventory(){

    const [loading,setLoading] = useState(false);
    const [dataSource,setDataSource] = useState([]);

    useEffect(()=>{
        setLoading(true);
        getInventory().then(res=>{
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
            title:"Rating",
            dataIndex:"rating",
            render:(rating)=>{return(<Rate value={rating} allowHalf disabled={true}/>)}
        },
        {
            title:"Stock",
            dataIndex:"stock"
        },
        {
            title:"Brand",
            dataIndex:"brand"
        },
        {
            title:"Category",
            dataIndex:"category"
        },
        
    ]

    return(
        <Space direction="vertical">
            <Typography.Title level={4}>Inventory</Typography.Title>
            <Table dataSource={dataSource} columns={columns} pagination={{pageSize:8}} loading={loading}/>
        </Space>
    );
}

export default Inventory