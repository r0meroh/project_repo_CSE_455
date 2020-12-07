import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector, useDispatch } from 'react-redux';
import { lineGraph, eraseGraph } from '../../actions/index';
import { Button } from 'react-bootstrap';

const LineChart = () => {
  const graph = useSelector((state) => state.graph);

  const dispatch = useDispatch();
  console.log(graph);
  return (
    <>
      <Button
        variant='dark'
        style={{ marginRight: '1%' }}
        onClick={() => dispatch(eraseGraph())}
      >
        Erase Graph
      </Button>
      <Button variant='dark' onClick={() => dispatch(lineGraph())}>
        Graph
      </Button>
      <Line data={graph.data} />
    </>
  );
};

export default LineChart;
