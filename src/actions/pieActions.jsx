import axios from 'axios';

export const renderPieChart = () => {
  return async (dispatch, getState) => {
    const response = await axios(
      `https://data.cdc.gov/resource/k8wy-p9cg.json?county_name=Los Angeles County`
    );

    const ethnicityData = [];
    for (let x = 0; x < response.data.length; x++) {
      ethnicityData.push({
        ethnicity1: response.data[x].non_hispanic_white,
        ethnicity2: response.data[x].non_hispanic_black,
        ethnicity3: response.data[x].non_hispanic_american_indian,
        ethnicity4: response.data[x].non_hispanic_asian,
        ethnicity5: response.data[x].non_hispanic_other,
        ethnicity6: response.data[x].hispanic,
      });
    }
    dispatch({
      type: 'PIE_CHART',
      payload: ethnicityData,
    });
  };
};