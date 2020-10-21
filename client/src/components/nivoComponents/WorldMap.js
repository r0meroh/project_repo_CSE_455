import React, {useEffect,} from 'react'
import { ResponsiveChoropleth } from '@nivo/geo';
import { useSelector, useDispatch } from 'react-redux';
import { renderWorldGraph } from '../../actions/index';
import {incrementLambda, incrementPhi, decrementLambda, decrementPhi} from '../../actions/counterActions'
import countries from './worldData.json';
import { Button } from 'react-bootstrap'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
const WorldMap = () => {
   
    const worldGraph = useSelector((state) => state.worldGraph);
    const counter = useSelector((state) => state.counter);
    const counterphi = useSelector((state) => state.phicounter);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(renderWorldGraph())
    }, [dispatch] );
    // dispatch(renderWorldGraph())
    
    console.log(counter.counterLambda);
    

    return (
        <>
        
        <ResponsiveChoropleth
          data={worldGraph.data}
          features={countries.features}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          colors="YlOrRd"
          domain={[0, 1000000]}
          unknownColor='#666666'
          label='properties.name'
          valueFormat='.2s'
          projectionType="orthographic"
          projectionScale={240}
          projectionTranslation={[ 0.45, 0.5 ]}
          projectionRotation={[ counter, counterphi , 0 ]}
          enableGraticule={true}
          graticuleLineColor='#dddddd'
          borderWidth={0.5}
          borderColor='#152538'
          legends={[
            {
              anchor: 'bottom-left',
              direction: 'column',
              justify: true,
              translateX: 20,
              translateY: -100,
              itemsSpacing: 0,
              itemWidth: 94,
              itemHeight: 18,
              itemDirection: 'left-to-right',
              itemTextColor: '#444444',
              itemOpacity: 0.85,
              symbolSize: 18,
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemTextColor: '#000000',
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
        <button onClick={ () => dispatch(incrementLambda())}  > <ArrowBackIcon /> </button> 
        <button onClick={ () => dispatch(decrementLambda())}  > <ArrowForwardIcon  /> </button> 
        <button onClick={ () => dispatch(decrementPhi())}  > <ArrowUpwardIcon /> </button> 
        <button onClick={ () => dispatch(incrementPhi())}  > <ArrowDownwardIcon/>  </button> 

      </>
    )
}

export default WorldMap
