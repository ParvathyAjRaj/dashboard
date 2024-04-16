import React, { useEffect,useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Card } from 'antd';
import { getCartDetails } from '../API/api';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function RevenueGraph(){

    const [revenueData,setRevenueData] = useState({
        labels:[],
        datasets:[]
    })

    useEffect(()=>{
      getCartDetails().then(res=>{
            const labels = res.carts.map((cart)=>{return (`User${cart.userId}`)});
            const data = res.carts.map((cart)=>{return (cart.discountedTotal)});
            const dataSource = {
                labels,
                datasets: [
                    {
                    label: 'Revenue',
                    data: data,
                    //backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    backgroundColor :  'rgba(255, 0, 0, 1)',
                    }
                ],
                };
            setRevenueData(dataSource);
            
        })
    },[]);

    

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
          title: {
            display: true,
            text: 'Revenue Chart',
          },
        },
      };

    return(
        <Card style={{width:600,height:400}}>
            <Bar options={options} data={revenueData}></Bar>
        </Card>
    )
    
}

export default RevenueGraph;