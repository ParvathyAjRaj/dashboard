import React from "react";
import {Typography,Image,Space, Badge} from "antd";
import {MailOutlined, BellFilled} from '@ant-design/icons';
import './Header.css';

function Header(){
return(
    <div className="header">
        <Image
            width={100}
            className="profile"
            alt="sample"
            src="motivation_img.jpg"
        />
        <Typography.Title style={{paddingBottom:5}}>Crypto Dashboard</Typography.Title>
        <Space>
            <Badge count={10} dot>
                <MailOutlined style={{fontSize:24 , paddingRight:5}}></MailOutlined>
            </Badge>
            <Badge count={20}>
                <BellFilled style={{fontSize:24}}></BellFilled>
            </Badge>
        </Space>
        
    </div>
);
}

export default Header;