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
        background: "#222222",
        textColor: '#ffffff',
    };

    return (
        <>
            <div class="text-white font-weight-bold text-center">
                <h1> <u> <center>Pie Chart Distribution of COVID-19 Severity Relative to
                    Race and Deaths in % (LA County) </center> </u> </h1>
            </div>
            <ResponsivePie
                data={piechartReduced.data}
                margin={{ top: 60, right: 60, bottom: 60, left: 60 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                colors={{ scheme: 'red_yellow_blue' }}
                borderWidth={1}
                borderColor="black"
                itemTextColor="#ffffff"
                radialLabelsSkipAngle={0}
                radialLabelsTextXOffset={6}
                radialLabelsTextColor="#333333"
                radialLabelsLinkOffset={0}
                radialLabelsLinkDiagonalLength={16}
                radialLabelsLinkHorizontalLength={24}
                radialLabelsLinkStrokeWidth={1}
                radialLabelsLinkColor={{ from: 'color' }}
                slicesLabelsSkipAngle={10}
                slicesLabelsTextColor="#000000"
                animate={true}
                theme={changedTheme}
                motionStiffness={90}
                motionDamping={15}
                // defs={[
                //     {
                //         id: 'dots',
                //         type: 'patternDots',
                //         background: 'inherit',
                //         color: 'rgba(255, 255, 255, 0.3)',
                //         size: 4,
                //         padding: 1,
                //         stagger: true
                //     },
                //     {
                //         id: 'lines',
                //         type: 'patternLines',
                //         background: 'inherit',
                //         color: 'rgba(255, 255, 255, 0.3)',
                //         rotation: -45,
                //         lineWidth: 6,
                //         spacing: 10
                //     }
                // ]}
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
                                    itemTextColor: '#000'
                                }
                            }
                        ]
                    },
                ]}

            />
        </>
    );
};

export default PieChart


