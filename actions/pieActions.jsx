import axios from 'axios';

export const renderPieChart = () => {
  return async (dispatch, getState) => {
    const response = await axios(
      `https://data.cdc.gov/resource/k8wy-p9cg.json?county_name=Los Angeles County`
    );

  const ethnicityData = []; 
    //for (let x = 0; x < 1; x++) 
      ethnicityData.push(
    {
        id:1,  value: response.data[0].non_hispanic_white,
    },
    {
        id:2, value: response.data[1].non_hispanic_black,
    },
//     {
//         id:3, value: response.data[2].non_hispanic_american_indian,
//     },
//     {
//       id:4, value: response.data[3].non_hispanic_asian,
//   },
//   {
//     id:5, value: response.data[4].non_hispanic_other,
//   }, //commented section of data having problems in displaying on pie chart and having trouble in being read
      );
  
    
    dispatch({
      type: 'PIE_CHART',
      payload: ethnicityData,
    });
  };
};