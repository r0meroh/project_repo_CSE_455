import axios from "axios";

export const renderWorldGraph = () => {
  return async (dispatch, getState) => {
    const response = await axios(
      `https://disease.sh/v3/covid-19/countries?yesterday=true&twoDaysAgo=false&sort=cases&allowNull=false`
    );
    const worldData = [];
    for (let x = 0; x < response.data.length; x++) {
      worldData.push({
        id: response.data[x].countryInfo.iso3,
        value: response.data[x].cases,
      });
    }
    console.log(worldData);
    dispatch({
      type: "WORLD_GRAPH",
      payload: worldData,
    });
  };
};

export const renderGraph = (c1) => {
  return async (dispatch, getState) => {
    const response = await axios(
      `https://disease.sh/v3/covid-19/countries/${c1}%2CSpain%2CMexico%2CPoland%2CGermany?yesterday=true`
    );
    console.log(response.data);
    //console.log(response.data);
    let array1 = [];
    let array2 = [];
    let array3 = [];
    let array4 = [];
    let array5 = [];
    let country1 = "";
    let country2 = "";
    let country3 = "";
    let country4 = "";
    let country5 = "";
    let CASES1 = 0;
    let CASES2 = 0;
    let CASES3 = 0;
    let CASES4 = 0;
    let CASES5 = 0;
    let DEATHS1 = 0;
    let DEATHS2 = 0;
    let DEATHS3 = 0;
    let DEATHS4 = 0;
    let DEATHS5 = 0;
    let allDeaths = [];
    let allCases = [];
    let allCountries = [];

    array1.push(response.data[0]);
    array2.push(response.data[1]);
    array3.push(response.data[2]);
    array4.push(response.data[3]);
    array5.push(response.data[4]);

    array1.forEach((i) => {
      country1 = i.country;
      DEATHS1 = i.deaths;
      CASES1 = i.cases;
      allDeaths.push(DEATHS1);
      allCases.push(CASES1);
      allCountries.push(country1);
    });
    array2.forEach((i) => {
      country2 = i.country;
      DEATHS2 = i.deaths;
      CASES2 = i.cases;
      allDeaths.push(DEATHS2);
      allCases.push(CASES2);
      allCountries.push(country2);
    });
    array3.forEach((i) => {
      country3 = i.country;
      DEATHS3 = i.deaths;
      CASES3 = i.cases;
      allDeaths.push(DEATHS3);
      allCases.push(CASES3);
      allCountries.push(country3);
    });
    array4.forEach((i) => {
      country4 = i.country;
      DEATHS4 = i.deaths;
      CASES4 = i.cases;
      allDeaths.push(DEATHS4);
      allCases.push(CASES4);
      allCountries.push(country4);
    });
    array5.forEach((i) => {
      country5 = i.country;
      DEATHS5 = i.deaths;
      CASES5 = i.cases;
      allDeaths.push(DEATHS5);
      allCases.push(CASES5);
      allCountries.push(country5);
    });

    // console.log(DEATHS1 * 0.0016);
    dispatch({
      type: "GET_GRAPH",
      country1,
      DEATHS1,
      deaths: allDeaths,
      cases: allCases,
      countries: allCountries,
      // prettier-ignore
      payload: [
          {
            'country': country1, 
            'DEATHS': Math.round((DEATHS1-(Math.min(...allDeaths)))/(Math.max(...allDeaths)-Math.min(...allDeaths)) * 100),
            "DEATHSColor": "hsl(300, 70%, 50%)",
            "CASES": Math.round((CASES1-(Math.min(...allCases)))/(Math.max(...allCases)-Math.min(...allCases)) * 100),
          },
          {
            'country': country2,
            'DEATHS': Math.round((DEATHS2-(Math.min(...allDeaths)))/(Math.max(...allDeaths)-Math.min(...allDeaths)) * 100),
            'DEATHSColor': `hsl(100, 70%, 50%)`,
            'CASES':  Math.round((CASES2-(Math.min(...allCases)))/(Math.max(...allCases)-Math.min(...allCases)) * 100),
          },
          {
            'country': country3,
            'DEATHS': Math.round((DEATHS3-(Math.min(...allDeaths)))/(Math.max(...allDeaths)-Math.min(...allDeaths)) * 100),
            'deathsColor': `hsl(300, 70%, 50%)`,
            'CASES': Math.round((CASES3-(Math.min(...allCases)))/(Math.max(...allCases)-Math.min(...allCases)) * 100),
          },
          {
            'country': country4,
            'DEATHS': Math.round((DEATHS4-(Math.min(...allDeaths)))/(Math.max(...allDeaths)-Math.min(...allDeaths)) * 100),
            'CASES': Math.round((CASES4-(Math.min(...allCases)))/(Math.max(...allCases)-Math.min(...allCases)) * 100),
          },
          {
            'country': country5,
            'DEATHS': Math.round((DEATHS5-(Math.min(...allDeaths)))/(Math.max(...allDeaths)-Math.min(...allDeaths)) * 100),
            'CASES': Math.round((CASES5-(Math.min(...allCases)))/(Math.max(...allCases)-Math.min(...allCases)) * 100),
          },
         
        ],
    });
  };
};
export const lineGraph = () => {
  return async (dispatch, getState) => {
    const response = await axios.get(
      `https://disease.sh/v3/covid-19/nyt/counties/Los%20Angeles?lastdays=15`
    );
    console.log("request", response.data);

    const labels = [];
    const data = [];
    const deathData = [];

    for (let x = 0; x < response.data.length; x++) {
      data.push(response.data[x].cases);
      labels.push(response.data[x].date);
      deathData.push(response.data[x].deaths);
    }

    console.log("data", data);
    console.log("labels", labels);

    dispatch({
      type: "GRAPH",
      payload: {
        data,
        labels,
        deathData,
      },
    });
  };
};
// return {
// type: 'GRAPH',
// payload: response.data
// };

export const eraseGraph = () => {
  return {
    type: "ERASE",
  };
};
