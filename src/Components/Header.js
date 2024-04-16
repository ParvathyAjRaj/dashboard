import React from "react";
import {Typography,Image,Space, Badge, Drawer, List} from "antd";
import {MailOutlined, BellFilled} from '@ant-design/icons';
import './Header.css';
import {getComments, getOrders} from "../API/api";
import { useState , useEffect } from "react";

function Header(){

    const [comments,setComments] = useState([]);
    const [orders,setOrders] = useState([]);
    const [commentsOpen,setCommentsOpen] = useState(false);
    const [notificationsOpen,setNotificationsOpen] = useState(false);

    useEffect(()=>{
        getComments().then(res=>{setComments(res.comments)});
        getOrders().then(res=>{setOrders(res.products)});
    },[])

    return(
        <div className="header">
            <Image
                width={100}
                className="profile"
                alt="sample"
                src="motivation_img.jpg"
            />
            <Typography.Title style={{paddingBottom:5,marginRight:50}}>Cart Dashboard</Typography.Title>
            <Space>
                <Badge count={comments.length} dot>
                    <MailOutlined style={{fontSize:24 , paddingRight:5}} onClick={()=>{setCommentsOpen(true)}}></MailOutlined>
                </Badge>
                <Badge count={orders.length}>
                    <BellFilled style={{fontSize:24}} onClick={()=>{setNotificationsOpen(true)}}></BellFilled>
                </Badge>
            </Space>
            <Drawer title="Comments" open={commentsOpen} onClose={()=>{setCommentsOpen(false)}}>
                <List dataSource={comments} renderItem={(item) => {return(<List.Item>`<Typography.Text strong>{item.body}</Typography.Text> - {item.user.username}`</List.Item>)}}></List>
            </Drawer>
            <Drawer title="Notifications" open={notificationsOpen} onClose={()=>{setNotificationsOpen(false)}}>
                <List dataSource={orders} renderItem={(item) => {return(<List.Item><Typography.Text strong>{item.title}</Typography.Text>  has been ordered</List.Item>)}}></List>
            </Drawer>
        </div>
    );
}

export default Header;