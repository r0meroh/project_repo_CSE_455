import axios from 'axios';

export const renderLineGraph = (c1) => {
  return async (dispatch) => {
    const result = await axios(
      `https://disease.sh/v3/covid-19/historical/${c1}?lastdays=all`
    );

    let countryId = result.data.country;

    let data = [];
    for (
      let i = 0;
      i < Object.values(result.data.timeline.cases).length;
      i += 30
    ) {
      data.push({
        date: Object.keys(result.data.timeline.cases)[i],
        deaths: Object.values(result.data.timeline.cases)[i],
      });
    }

    dispatch({
      type: 'LINE_GRAPH',
      // date: firstDate,
      country: countryId,
      payload: data,
    });
  };
};
