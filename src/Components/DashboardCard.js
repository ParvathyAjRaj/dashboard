import {Space,Card, Statistic} from "antd";

function DashboardCard({icon,title,value}){
    return(
        <Card style={{marginRight:100}}>
            <Space direction="horizontal">
                {icon}
                <Statistic title={title} value={value}/>
            </Space>
        </Card>
    );
}

export default DashboardCard;