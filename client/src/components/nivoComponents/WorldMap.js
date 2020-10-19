import React, {useEffect} from 'react'
import { ResponsiveChoropleth } from '@nivo/geo';
import { useSelector, useDispatch } from 'react-redux';
import { renderWorldGraph } from '../../actions/index';
import countries from './worldData.json';
const WorldMap = () => {
    const worldGraph = useSelector((state) => state.worldGraph);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(renderWorldGraph())
    })
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
          projectionScale={222}
          projectionTranslation={[ 0.45, 0.5 ]}
          projectionRotation={[ -260, -39, 0 ]}
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
      </>
    )
}

export default WorldMap
