import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector, useDispatch } from 'react-redux';
import { lineGraph, eraseGraph } from '../../actions/index';

const LineChart = () => {
  const graph = useSelector((state) => state.graph);

  const dispatch = useDispatch();
  console.log(graph);
  return (
    <>
      <button onClick={() => dispatch(eraseGraph())}>Erase Graph</button>
      <button onClick={() => dispatch(lineGraph())}>Graph</button>
      <Line data={graph.data} />
    </>
  );
};

export default LineChart;
