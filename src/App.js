import React from "react";
import Header from "./Components/Header";
import { Space } from "antd";
import SideMenu from "./Components/SideMenu";
import Footer from "./Components/Footer";
import Content from "./Components/Content";
//import "./App.css";
import "./Components/SideMenu.css";

function App(){
    return(
    <div>
        <Header/>
        <Space className="SideMenuAndContent">
            <SideMenu/>
            <Content/>
        </Space>
        <Footer/>
    </div>);
    
}

export default App;