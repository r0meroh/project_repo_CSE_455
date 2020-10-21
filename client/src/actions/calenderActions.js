import axios from 'axios';

export const renderCalendarGraph = () => {

    return async (dispatch, getState) => {
      
      const response = await axios(
        `https://disease.sh/v3/covid-19/nyt/states/California?lastdays=all`
      );


      const calendarData = [];
      for (let x = 0; x < response.data.length; x++){
        calendarData.push({
          day: response.data[x].date,
          value: response.data[x].cases,
        })
    };
      dispatch({
        type: "CALENDAR_GRAPH",
        payload: calendarData
    });
  }
  };