import { DollarCircleOutlined, ShoppingCartOutlined, ShoppingOutlined, UserOutlined } from "@ant-design/icons";
import { Typography,Space} from "antd";
import RecentOrders from "../Components/RecentOrdersTable";
import DashboardCard from "../Components/DashboardCard";
import RevenueGraph from "../Components/RevenueGraph";
import { useEffect, useState } from "react";
import { getCustomers, getInventory, getOrders } from "../API/api";

function Dashboard(){
    const [orders,setOrders] = useState(0);
    const [inventory,setInventory] = useState(0);
    const [customers,setCustomers] = useState(0);
    const [revenue,setRevenue] = useState(0);

    useEffect(()=>{
        getOrders().then(res=>{
            setOrders(res.total)
            setRevenue(res.discountedTotal)});
        getInventory().then(res=>{setInventory(res.total)});
        getCustomers().then(res=>{setCustomers(res.total)});
    },[])

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
                            value={orders}/>
                <DashboardCard icon={<ShoppingOutlined 
                            style={{
                                fontSize:24,
                                color:"red",
                                backgroundColor:"rgba(255,0,0,0.1)",
                                borderRadius:20,
                                padding:8}}/>} title="Inventory" value={inventory}/>
                <DashboardCard icon={<UserOutlined 
                            style={{
                                fontSize:24,
                                color:"blue",
                                backgroundColor:"rgba(0,0,255,0.15)",
                                borderRadius:20,
                                padding:8}}/>} title="Customers" value={customers}/>
                <DashboardCard icon={<DollarCircleOutlined 
                            style={{
                                fontSize:24,
                                color:"green",
                                backgroundColor:"rgba(0,255,0,0.15)",
                                borderRadius:20,
                                padding:8}}/>} title="Revenue" value={revenue}/>
            </Space>

            {/* Dashboard Table  and Dashboard Graph*/}
            
            <Space>
                <RecentOrders/>
                <RevenueGraph/>    
            </Space>
        </Space>
    );
}

export default Dashboard