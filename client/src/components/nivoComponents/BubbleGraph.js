import React, { useEffect } from 'react';

import { ResponsiveBubble } from '@nivo/circle-packing';
import { renderBubbleGraph } from '../../actions/bubbleActions';
import { useSelector, useDispatch } from 'react-redux';

const BubbleGraph = () => {
  const bubbleGraph = useSelector((state) => state.bubbleGraph);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(renderBubbleGraph());
  }, [dispatch]);

  return (
    <ResponsiveBubble
      root={bubbleGraph.data}
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      identity='name'
      value='loc'
      colors={{ scheme: 'red_yellow_blue' }}
      padding={6}
      labelTextColor={{ from: 'color', modifiers: [['darker', 0.8]] }}
      borderWidth={2}
      borderColor={{ from: 'color' }}
      defs={[
        {
          id: 'lines',
          type: 'patternLines',
          background: 'none',
          color: 'inherit',
          rotation: -45,
          lineWidth: 5,
          spacing: 8,
        },
      ]}
      fill={[{ match: { depth: 1 }, id: 'lines' }]}
      animate={true}
      motionStiffness={90}
      motionDamping={12}
    />
  );
};

export default BubbleGraph;
