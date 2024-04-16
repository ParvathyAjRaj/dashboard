import { DollarCircleOutlined, ShoppingCartOutlined, ShoppingOutlined, UserOutlined } from "@ant-design/icons";
import { Typography,Space} from "antd";
import RecentOrders from "../Components/RecentOrdersTable";
import DashboardCard from "../Components/DashboardCard";
import RevenueGraph from "../Components/RevenueGraph";

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

        {/* Dashboard Table  and Dashboard Graph*/}
        
        <Space>
            <RecentOrders/>
            <RevenueGraph/>    
        </Space>
    </Space>
);
}

export default Dashboard