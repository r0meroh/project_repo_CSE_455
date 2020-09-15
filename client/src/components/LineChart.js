import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const ChartMe = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: [
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday',
      ],
      datasets: [
        {
          label: 'Deaths',

          data: [33, 44, 10, 20, 55, 6, 88],

          backgroundColor: ['rgba(193, 66, 66, 1'],
          borderWidth: 4,
        },
        {
          label: 'Cases',
          data: [111, 121, 100, 98, 89, 101, 50],
          backgroundColor: ['rgba(75, 192, 192, 1'],
          borderWidth: 4,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div className='App'>
      <div>
        <Line data={chartData} width={50} height={25} />
      </div>
    </div>
  );
};

export default ChartMe;
