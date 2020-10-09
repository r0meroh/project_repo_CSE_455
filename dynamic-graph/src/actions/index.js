//action file
import axios from 'axios';





export const graph = () =>  {
   
    return async (dispatch, getState) => {
        const response = await axios.get(`https://disease.sh/v3/covid-19/nyt/counties/Los%20Angeles?lastdays=15`);
        console.log("request",response.data);
        
        const labels = [];
        const data = [];
        const deathData = [];

        for (let x = 0; x < response.data.length; x++){
            data.push(response.data[x].cases)
            labels.push(response.data[x].date)
            deathData.push(response.data[x].deaths)
        };

        console.log('data', data);
        console.log('labels',labels);
        
        dispatch({
            type: "GRAPH",
            payload: {
                data,
                labels,
                deathData
            }
        });
    };

    };
    // return {  
    // type: 'GRAPH',
    // payload: response.data
    // };



export const eraseGraph = () => {
    return {
        type: 'ERASE'
    };
};



