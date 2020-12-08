import React, { useEffect } from 'react';
import { ResponsivePie } from '@nivo/pie';
import { renderPieChart } from '../../actions/pieActions';
import { useSelector, useDispatch } from 'react-redux';
//import { data } from './data';

const PieChart = () => {
  const piechartReduced = useSelector((state) => state.piechartReduced);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(renderPieChart());
  }, [dispatch]);

  const changedTheme = {
    background: '#222222',
    textColor: '#ffffff',

    // axis: {
    //   legend: {
    //     text: {
    //       fill: '#aaaaaa',
    //     },
    //   },
    // },
  };

  return (
    <>
      <div class='text-white font-weight-bold text-center font'>
        <h1>
          <u>
            <center>
              Pie Chart Distribution of COVID-19 Severity Relative to Race and
              Deaths in % (LA County)
            </center>
          </u>
        </h1>
      </div>
      <ResponsivePie
        data={piechartReduced.data}
        margin={{ top: 60, right: 60, bottom: 60, left: 60 }}
        innerRadius={0.5}
        padAngle={1}
        cornerRadius={3}
        colors={{ scheme: 'red_yellow_blue' }}
        borderWidth={1}
        borderColor='black'
        itemTextColor='#ffffff'
        radialLabelsSkipAngle={0}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor='#ffffff'
        radialLabelsLinkDiagonalLength={50}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{ from: 'color' }}
        sliceLabelsTextColor='#000000'
        animate={true}
        theme={changedTheme}
        motionStiffness={90}
        motionDamping={15}
        legends={[
          {
            anchor: 'bottom-left',
            direction: 'column',
            justify: false,
            translateX: -20,
            translateY: 20,
            itemWidth: 120,
            itemHeight: 18,
            textColor: '#ffffff',
            itemTextColor: '#ffffff',
            symbolSize: 25,
            //symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#ffffff',
                },
              },
            ],
          },
        ]}
      />
    </>
  );
};
export default PieChart;
