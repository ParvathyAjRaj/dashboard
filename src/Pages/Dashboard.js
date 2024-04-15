import { DollarCircleOutlined, ShoppingCartOutlined, ShoppingOutlined, UserOutlined } from "@ant-design/icons";
import { Typography,Space,Card, Statistic, Table } from "antd";
import React, { useEffect, useState } from "react";
import { getOrders } from "../API/api";

function Dashboard(){
return(
    <Space size={20} direction="vertical">
        <Typography.Title level={4}>Dashboard</Typography.Title>
        {/* Dashboard Card */}
        <Space>
            <DashboardCard icon={<ShoppingCartOutlined 
                        style={{
                            fontSize:24 , 
                            color:"orange",
                            backgroundColor:"rgba(100,0,100,0.15)",
                            borderRadius:20,
                            padding:8}}/>} 
                        title="Orders" 
                        value={12345}/>
            <DashboardCard icon={<ShoppingOutlined 
                        style={{
                            fontSize:24,
                            color:"red",
                            backgroundColor:"rgba(255,0,0,0.1)",
                            borderRadius:20,
                            padding:8}}/>} title="Inventory" value={12345}/>
            <DashboardCard icon={<UserOutlined 
                        style={{
                            fontSize:24,
                            color:"blue",
                            backgroundColor:"rgba(0,0,255,0.15)",
                            borderRadius:20,
                            padding:8}}/>} title="Customers" value={12345}/>
            <DashboardCard icon={<DollarCircleOutlined 
                        style={{
                            fontSize:24,
                            color:"green",
                            backgroundColor:"rgba(0,255,0,0.15)",
                            borderRadius:20,
                            padding:8}}/>} title="Revenue" value={12345}/>
        </Space>

        {/* Dashboard Table */}
        <Card>
            <Space>
                <RecentOrders/>
            </Space>
        </Card>
    </Space>
);
}

function DashboardCard({icon,title,value}){
    return(
        <Card>
            <Space direction="horizontal">
                {icon}
                <Statistic title={title} value={value}/>
            </Space>
        </Card>
    );
}

function RecentOrders(){
    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
        },
        {
            title: 'Price',
            dataIndex: 'discountedPrice',
            key: 'discountedPrice',
        },
        ]

    const [dataSource,setDataSource] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getOrders().then((res) => {
            res.carts.map((eachCart) => {
                return(
                    setDataSource(eachCart.products.splice(0,3))
                )
                })
            setLoading(false);
        })
    },[])

    return(
        <>
            <Typography.Text>Recent Orders</Typography.Text>
            <Table dataSource={dataSource} columns={columns} pagination={false}/>
        </>
    )
}

export default Dashboard