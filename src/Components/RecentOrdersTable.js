import { Typography, Table,Card } from "antd";
import { getRevenue } from "../API/api";
import React, { useEffect, useState } from "react";

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
        getRevenue().then((res) => {
            res.carts.map((eachCart) => {
                return(
                    setDataSource(eachCart.products)
                )
                })
            setLoading(false);
        })
    },[])

    return(
        <Card >
            <Typography.Text>Recent Orders</Typography.Text>
            <Table dataSource={dataSource} columns={columns} pagination={false} loading={loading}/>
        </Card>
    )
}

export default RecentOrders;