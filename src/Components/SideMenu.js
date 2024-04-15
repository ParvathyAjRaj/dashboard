import React from "react";
import {Menu} from "antd";
import { useNavigate } from "react-router-dom";
import { AppstoreOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";

function SideMenu(){
    const navigate = useNavigate();
    return(
        <div>
            <Menu
            style={{fontSize:20}}
            onClick={(item) => {navigate(item.key)}}
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