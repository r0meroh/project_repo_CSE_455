import axios from "axios";

export const renderLineGraph = (c1) => {
  return async (dispatch) => {
    const response = await axios(
      `https://api.covid19api.com/total/dayone/country/${c1}/status/confirmed`
    );
    const response2 = await axios(
      `https://api.covid19api.com/total/dayone/country/${c1}/status/deaths`
    );
    let countryId = response.data[0].Country;
    // let firstDate = new Date(response.data[0].Date).toISOString().slice(0, 10);

    let countryData = [];
    let deathData = [];
    for (let i = 0; i < response.data.length; i += 30) {
      countryData.push({
        date: new Date(response.data[i].Date).toISOString().slice(0, 10),
        deaths: response.data[i].Cases,
      });
    }
    // for (let x = 0; x < response2.data.length; x += 30) {
    //   deathData.push({
    //     x: new Date(response2.data[x].Date).toISOString().slice(0, 10),
    //     y: response2.data[x].Cases,
    //   });
    // }

    console.log(response2.data);

    dispatch({
      type: "LINE_GRAPH",
      // date: firstDate,
      country: countryId,
      payload: countryData,
    });
  };
};
// export const renderDeathGraph = (c1) => {
//   return async (dispatch) => {
//     const response2 = await axios(
//       `https://api.covid19api.com/total/dayone/country/${c1}/status/deaths`
//     );

//     let deathData = [];

//     for (let x = 0; x < response2.data.length; x += 30) {
//       deathData.push({
//         date: new Date(response2.data[x].Date).toISOString().slice(0, 10),
//         death: response2.data[x].Cases,
//       });
//     }

//     console.log(response2.data);

//     dispatch({
//       type: 'DEATH_GRAPH',

//       payload: deathData,
//     });
//   };
// };
