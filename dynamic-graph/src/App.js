import React from 'react';
import './App.css';
import { Line } from 'react-chartjs-2';
import { useSelector, useDispatch } from 'react-redux';
import {  graph, eraseGraph } from './actions' 

 




function App() {



  
  const isLogged = useSelector(state => state.isLogged);
  const graphState = useSelector(state => state.graph);
  
  const dispatch = useDispatch();
  return (
    <div className="App">

        
              
              
              <button onClick={() => dispatch(eraseGraph())}>Erase Graph</button>
              <button onClick={() => dispatch(graph())}>Graph</button>
              <Line data={graphState.data} />
              
              {isLogged ? <h2>Logged in. </h2>:<h2>Not logged in...</h2>}    
    </div>
  );



}


export default App;
