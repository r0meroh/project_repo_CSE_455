import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line } from 'react-chartjs-2';


  const ChartMe = () => {
    const [dailyData, setDailyData] = useState([]);

    
    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
    });

    const globalChart = ( 
        dailyData.length != 0
        ? (
        <Line data={{
        labels: dailyData = dailyData.map(({ date }) => date),
        datasets: [
        {
          label: 'Deaths',
          data: dailyData.map(({ deaths }) => deaths),
          backgroundColor: ['rgba(255,0,0, 1'],
          bordercolor: 'red',
          borderWidth: 4,
        },
        {
          label: 'Cases',
          data: dailyData.map(({ confirmed }) => confirmed),
          backgroundColor: ['rgba(0, 128, 0, 1'],
          bordercolor: 'yellow',
          borderWidth: 4,
        }],
    }}
    />) : null 
    )
useEffect(() => {
    globalChart();
  }, [] );
  return (
    <div className='App'>
      <div>
        <Line data={dailyData} width={50} height={25} />
      </div>
    </div>
  );
    
};

  
  export default ChartMe;
