import React, { useEffect, useState } from "react";
import {Menu} from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { AppstoreOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import "./SideMenu.css";

function SideMenu(){
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedKeys,setSelectedKeys] = useState('/');

    useEffect(()=>{
        const pathName = location.pathname;
        setSelectedKeys(pathName);
    },[location.pathname])

    return(
        <div className="SideMenu">
            <Menu
            className="SideMenuVertical"
            mode="vertical"
            style={{fontSize:20}}
            onClick={(item) => {navigate(item.key)}}
            selectedKeys={selectedKeys}
            items={[
                {
                    label:"Dashboard",
                    key:"/",
                    icon:<AppstoreOutlined />
                },
                {
                    label:"Inventory",
                    key:"/inventory",
                    icon:<ShopOutlined/>
                },
                {
                    label:"Orders",
                    key:"/orders",
                    icon:<ShoppingCartOutlined/>
                },
                {
                    label:"Customers",
                    key:"/customers",
                    icon:<UserOutlined/>
                },
            ]}
            >

            </Menu>
        </div>
    )
}

export default SideMenu;