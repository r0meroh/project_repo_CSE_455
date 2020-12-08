import axios from 'axios';

export const renderLineGraph = (c1) => {
  return async (dispatch) => {
    const result = await axios(
      `https://disease.sh/v3/covid-19/historical/${c1}?lastdays=all`
    );

    let countryId = result.data.country;

    let data = [];
    let death = [];
    for (
      let i = 0;
      i < Object.values(result.data.timeline.cases).length;
      i += 30
    ) {
      data.push({
        x: Object.keys(result.data.timeline.cases)[i],
        y: Object.values(result.data.timeline.cases)[i],
      });
      death.push({
        x: Object.keys(result.data.timeline.deaths)[i],
        y: Object.values(result.data.timeline.deaths)[i],
      });
    }

    dispatch({
      type: 'LINE_GRAPH',
      // date: firstDate,
      country: countryId,
      payload: [
        {
          id: countryId + ' Deaths',
          data: death,
        },
        {
          id: countryId + ' Cases',
          data: data,
        },
      ],
    });
  };
};
