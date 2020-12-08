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
    dispatch({
      type: "WORLD_GRAPH",
      payload: worldData,
    });
  };
};

export const renderGraph = () => {
  return async (dispatch, getState) => {
    const response = await axios(
      `https://disease.sh/v3/covid-19/countries/United%20States%2C%20india%2C%20brazil%2C%20france%2C%20russia%2C%20spain%2C%20argentina%2C%20united%20kingdom%2C%20colombia%2C%20italy?yesterday=true`
    );
    console.log(response.data);
    //console.log(response.data);
    let array0 = [];
    let array1 = [];
    let array2 = [];
    let array3 = [];
    let array4 = [];
    let array5 = [];
    let array6 = [];
    let array7 = [];
    let array8 = [];
    let array9 = [];
    let array10 = [];
    let country1 = "";
    let country2 = "";
    let country3 = "";
    let country4 = "";
    let country5 = "";
    let country6 = "";
    let country7 = "";
    let country8 = "";
    let country9 = "";
    let country10 = "";
    let CASES1 = 0;
    let CASES2 = 0;
    let CASES3 = 0;
    let CASES4 = 0;
    let CASES5 = 0;
    let CASES6 = 0;
    let CASES7 = 0;
    let CASES8 = 0;
    let CASES9 = 0;
    let CASES10 = 0;
    let DEATHS1 = 0;
    let DEATHS2 = 0;
    let DEATHS3 = 0;
    let DEATHS4 = 0;
    let DEATHS5 = 0;
    let DEATHS6 = 0;
    let DEATHS7 = 0;
    let DEATHS8 = 0;
    let DEATHS9 = 0;
    let DEATHS10 = 0;
    let ACTIVE1 = 0;
    let ACTIVE2 = 0;
    let ACTIVE3 = 0;
    let ACTIVE4 = 0;
    let ACTIVE5 = 0;
    let ACTIVE6 = 0;
    let ACTIVE7 = 0;
    let ACTIVE8 = 0;
    let ACTIVE9 = 0;
    let ACTIVE10 = 0;
    let DEATHSPERMIL1 = 0;
    let DEATHSPERMIL2 = 0;
    let DEATHSPERMIL3 = 0;
    let DEATHSPERMIL4 = 0;
    let DEATHSPERMIL5 = 0;
    let DEATHSPERMIL6 = 0;
    let DEATHSPERMIL7 = 0;
    let DEATHSPERMIL8 = 0;
    let DEATHSPERMIL9 = 0;
    let DEATHSPERMIL10 = 0;
    let TODAYSDEATHS1 = 0;
    let TODAYSDEATHS2 = 0;
    let TODAYSDEATHS3 = 0;
    let TODAYSDEATHS4 = 0;
    let TODAYSDEATHS5 = 0;
    let TODAYSDEATHS6 = 0;
    let TODAYSDEATHS7 = 0;
    let TODAYSDEATHS8 = 0;
    let TODAYSDEATHS9 = 0;
    let TODAYSDEATHS10 = 0;
    let TODAYSCASES1 = 0;
    let TODAYSCASES2 = 0;
    let TODAYSCASES3 = 0;
    let TODAYSCASES4 = 0;
    let TODAYSCASES5 = 0;
    let TODAYSCASES6 = 0;
    let TODAYSCASES7 = 0;
    let TODAYSCASES8 = 0;
    let TODAYSCASES9 = 0;
    let TODAYSCASES10 = 0;
    let RECOVERED1 = 0;
    let RECOVERED2 = 0;
    let RECOVERED3 = 0;
    let RECOVERED4 = 0;
    let RECOVERED5 = 0;
    let RECOVERED6 = 0;
    let RECOVERED7 = 0;
    let RECOVERED8 = 0;
    let RECOVERED9 = 0;
    let RECOVERED10 = 0;
    let CASESPERMIL1 = 0;
    let CASESPERMIL2 = 0;
    let CASESPERMIL3 = 0;
    let CASESPERMIL4 = 0;
    let CASESPERMIL5 = 0;
    let CASESPERMIL6 = 0;
    let CASESPERMIL7 = 0;
    let CASESPERMIL8 = 0;
    let CASESPERMIL9 = 0;
    let CASESPERMIL10 = 0;
    let allDeaths = [];
    let allCases = [];
    let allCountries = [];
    let allActive = [];
    let allDeathsPerMil = [];
    let allTodaysDeaths = [];
    let allTodaysCases = [];
    let allRecovered = [];
    let allCasesPerMil = [];

    array1.push(response.data[0]);
    array2.push(response.data[1]);
    array3.push(response.data[2]);
    array4.push(response.data[3]);
    array5.push(response.data[4]);
    array6.push(response.data[5]);
    array7.push(response.data[6]);
    array8.push(response.data[7]);
    array9.push(response.data[8]);
    array10.push(response.data[9]);

    array1.forEach((i) => {
      country1 = i.country;
      DEATHS1 = i.deaths;
      CASES1 = i.cases;
      ACTIVE1 = i.active;
      DEATHSPERMIL1 = i.deathsPerOneMillion;
      TODAYSDEATHS1 = i.todayDeaths;
      TODAYSCASES1 = i.todayCases;
      RECOVERED1 = i.recovered;
      CASESPERMIL1 = i.casesPerOneMillion;
      allDeaths.push(DEATHS1);
      allCases.push(CASES1);
      allCountries.push(country1);
      allActive.push(ACTIVE1);
      allDeathsPerMil.push(DEATHSPERMIL1);
      allTodaysDeaths.push(TODAYSDEATHS1);
      allTodaysCases.push(TODAYSCASES1);
      allRecovered.push(RECOVERED1);
      allCasesPerMil.push(CASESPERMIL1);
    });
    array2.forEach((i) => {
      country2 = i.country;
      DEATHS2 = i.deaths;
      CASES2 = i.cases;
      ACTIVE2 = i.active;
      DEATHSPERMIL2 = i.deathsPerOneMillion;
      TODAYSDEATHS2 = i.todayDeaths;
      TODAYSCASES2 = i.todayCases;
      RECOVERED2 = i.recovered;
      CASESPERMIL2 = i.casesPerOneMillion;
      allDeaths.push(DEATHS2);
      allCases.push(CASES2);
      allCountries.push(country2);
      allActive.push(ACTIVE2);
      allDeathsPerMil.push(DEATHSPERMIL2);
      allTodaysDeaths.push(TODAYSDEATHS2);
      allTodaysCases.push(TODAYSCASES2);
      allRecovered.push(RECOVERED2);
      allCasesPerMil.push(CASESPERMIL2);
    });
    array3.forEach((i) => {
      country3 = i.country;
      DEATHS3 = i.deaths;
      CASES3 = i.cases;
      ACTIVE3 = i.active;
      DEATHSPERMIL3 = i.deathsPerOneMillion;
      TODAYSDEATHS3 = i.todayDeaths;
      TODAYSCASES3 = i.todayCases;
      RECOVERED3 = i.recovered;
      CASESPERMIL3 = i.casesPerOneMillion;
      allDeaths.push(DEATHS3);
      allCases.push(CASES3);
      allCountries.push(country3);
      allActive.push(ACTIVE3);
      allDeathsPerMil.push(DEATHSPERMIL3);
      allTodaysDeaths.push(TODAYSDEATHS3);
      allTodaysCases.push(TODAYSCASES3);
      allRecovered.push(RECOVERED3);
      allCasesPerMil.push(CASESPERMIL3);
    });
    array4.forEach((i) => {
      country4 = i.country;
      DEATHS4 = i.deaths;
      CASES4 = i.cases;
      ACTIVE4 = i.active;
      DEATHSPERMIL4 = i.deathsPerOneMillion;
      TODAYSDEATHS4 = i.todayDeaths;
      TODAYSCASES4 = i.todayCases;
      RECOVERED4 = i.recovered;
      CASESPERMIL4 = i.casesPerOneMillion;
      allDeaths.push(DEATHS4);
      allCases.push(CASES4);
      allCountries.push(country4);
      allActive.push(ACTIVE4);
      allDeathsPerMil.push(DEATHSPERMIL4);
      allTodaysDeaths.push(TODAYSDEATHS4);
      allTodaysCases.push(TODAYSCASES4);
      allRecovered.push(RECOVERED4);
      allCasesPerMil.push(CASESPERMIL4);
    });
    array5.forEach((i) => {
      country5 = i.country;
      DEATHS5 = i.deaths;
      CASES5 = i.cases;
      ACTIVE5 = i.active;
      DEATHSPERMIL5 = i.deathsPerOneMillion;
      TODAYSDEATHS5 = i.todayDeaths;
      TODAYSCASES5 = i.todayCases;
      RECOVERED5 = i.recovered;
      CASESPERMIL5 = i.casesPerOneMillion;
      allDeaths.push(DEATHS5);
      allCases.push(CASES5);
      allCountries.push(country5);
      allActive.push(ACTIVE5);
      allDeathsPerMil.push(DEATHSPERMIL5);
      allTodaysDeaths.push(TODAYSDEATHS5);
      allTodaysCases.push(TODAYSCASES5);
      allRecovered.push(RECOVERED5);
      allCasesPerMil.push(CASESPERMIL5);
    });
    array6.forEach((i) => {
      country6 = i.country;
      DEATHS6 = i.deaths;
      CASES6 = i.cases;
      ACTIVE6 = i.active;
      DEATHSPERMIL6 = i.deathsPerOneMillion;
      TODAYSDEATHS6 = i.todayDeaths;
      TODAYSCASES6 = i.todayCases;
      RECOVERED6 = i.recovered;
      CASESPERMIL6 = i.casesPerOneMillion;
      allDeaths.push(DEATHS6);
      allCases.push(CASES6);
      allCountries.push(country6);
      allActive.push(ACTIVE6);
      allDeathsPerMil.push(DEATHSPERMIL6);
      allTodaysDeaths.push(TODAYSDEATHS6);
      allTodaysCases.push(TODAYSCASES6);
      allRecovered.push(RECOVERED6);
      allCasesPerMil.push(CASESPERMIL6);
    });
    array7.forEach((i) => {
      country7 = i.country;
      DEATHS7 = i.deaths;
      CASES7 = i.cases;
      ACTIVE7 = i.active;
      DEATHSPERMIL7 = i.deathsPerOneMillion;
      TODAYSDEATHS7 = i.todayDeaths;
      TODAYSCASES7 = i.todayCases;
      RECOVERED7 = i.recovered;
      CASESPERMIL7 = i.casesPerOneMillion;
      allDeaths.push(DEATHS7);
      allCases.push(CASES7);
      allCountries.push(country7);
      allActive.push(ACTIVE7);
      allDeathsPerMil.push(DEATHSPERMIL7);
      allTodaysDeaths.push(TODAYSDEATHS7);
      allTodaysCases.push(TODAYSCASES7);
      allRecovered.push(RECOVERED7);
      allCasesPerMil.push(CASESPERMIL7);
    });
    array8.forEach((i) => {
      country8 = i.country;
      DEATHS8 = i.deaths;
      CASES8 = i.cases;
      ACTIVE8 = i.active;
      DEATHSPERMIL8 = i.deathsPerOneMillion;
      TODAYSDEATHS8 = i.todayDeaths;
      TODAYSCASES8 = i.todayCases;
      RECOVERED8 = i.recovered;
      CASESPERMIL8 = i.casesPerOneMillion;
      allDeaths.push(DEATHS8);
      allCases.push(CASES8);
      allCountries.push(country8);
      allActive.push(ACTIVE8);
      allDeathsPerMil.push(DEATHSPERMIL8);
      allTodaysDeaths.push(TODAYSDEATHS8);
      allTodaysCases.push(TODAYSCASES8);
      allRecovered.push(RECOVERED8);
      allCasesPerMil.push(CASESPERMIL8);
    });
    array9.forEach((i) => {
      country9 = i.country;
      DEATHS9 = i.deaths;
      CASES9 = i.cases;
      ACTIVE9 = i.active;
      DEATHSPERMIL9 = i.deathsPerOneMillion;
      TODAYSDEATHS9 = i.todayDeaths;
      TODAYSCASES9 = i.todayCases;
      RECOVERED9 = i.recovered;
      CASESPERMIL9 = i.casesPerOneMillion;
      allDeaths.push(DEATHS9);
      allCases.push(CASES9);
      allCountries.push(country9);
      allActive.push(ACTIVE9);
      allDeathsPerMil.push(DEATHSPERMIL9);
      allTodaysDeaths.push(TODAYSDEATHS9);
      allTodaysCases.push(TODAYSCASES9);
      allRecovered.push(RECOVERED9);
      allCasesPerMil.push(CASESPERMIL9);
    });
    array10.forEach((i) => {
      country10 = i.country;
      DEATHS10 = i.deaths;
      CASES10 = i.cases;
      ACTIVE10 = i.active;
      TODAYSDEATHS10 = i.todayDeaths;
      DEATHSPERMIL10 = i.deathsPerOneMillion;
      TODAYSCASES10 = i.todayCases;
      RECOVERED10 = i.recovered;
      CASESPERMIL10 = i.casesPerOneMillion;
      allDeaths.push(DEATHS10);
      allCases.push(CASES10);
      allCountries.push(country10);
      allActive.push(ACTIVE10);
      allDeathsPerMil.push(DEATHSPERMIL10);
      allTodaysDeaths.push(TODAYSDEATHS10);
      allTodaysCases.push(TODAYSCASES10);
      allRecovered.push(RECOVERED10);
      allCasesPerMil.push(CASESPERMIL10);
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
            'TotalDeaths': Math.round((DEATHS1-(Math.min(...allDeaths)))/(Math.max(...allDeaths)-Math.min(...allDeaths)) * 100),
            "DEATHSColor": "hsl(300, 70%, 50%)",
            "TotalCases": Math.round((CASES1-(Math.min(...allCases)))/(Math.max(...allCases)-Math.min(...allCases)) * 100),
            "ActiveCases":  Math.round((ACTIVE1-(Math.min(...allActive)))/(Math.max(...allActive)-Math.min(...allActive)) * 100),
            "TodaysDeaths":Math.round((TODAYSDEATHS1-(Math.min(...allTodaysDeaths)))/(Math.max(...allTodaysDeaths)-Math.min(...allTodaysDeaths)) * 100),
            "DeathsPerMil":Math.round((DEATHSPERMIL1-(Math.min(...allDeathsPerMil)))/(Math.max(...allDeathsPerMil)-Math.min(...allDeathsPerMil)) * 100),
            "TodaysCases":Math.round((TODAYSCASES1-(Math.min(...allTodaysCases)))/(Math.max(...allTodaysCases)-Math.min(...allTodaysCases)) * 100),
            "CasesPerMil":Math.round((CASESPERMIL1-(Math.min(...allCasesPerMil)))/(Math.max(...allCasesPerMil)-Math.min(...allCasesPerMil)) * 100),
            "Recovered":Math.round((RECOVERED1-(Math.min(...allRecovered)))/(Math.max(...allRecovered)-Math.min(...allRecovered)) * 100)
          },
          {
            'country': country2,
            'TotalDeaths': Math.round((DEATHS2-(Math.min(...allDeaths)))/(Math.max(...allDeaths)-Math.min(...allDeaths)) * 100),
            'DEATHSColor': `hsl(100, 70%, 50%)`,
            'TotalCases':  Math.round((CASES2-(Math.min(...allCases)))/(Math.max(...allCases)-Math.min(...allCases)) * 100),
            "ActiveCases":  Math.round((ACTIVE2-(Math.min(...allActive)))/(Math.max(...allActive)-Math.min(...allActive)) * 100),
            "TodaysDeaths":Math.round((TODAYSDEATHS2-(Math.min(...allTodaysDeaths)))/(Math.max(...allTodaysDeaths)-Math.min(...allTodaysDeaths)) * 100),
            "DeathsPerMil":Math.round((DEATHSPERMIL2-(Math.min(...allDeathsPerMil)))/(Math.max(...allDeathsPerMil)-Math.min(...allDeathsPerMil)) * 100),
            "TodaysCases":Math.round((TODAYSCASES2-(Math.min(...allTodaysCases)))/(Math.max(...allTodaysCases)-Math.min(...allTodaysCases)) * 100),
            "CasesPerMil":Math.round((CASESPERMIL2-(Math.min(...allCasesPerMil)))/(Math.max(...allCasesPerMil)-Math.min(...allCasesPerMil)) * 100),
            "Recovered":Math.round((RECOVERED2-(Math.min(...allRecovered)))/(Math.max(...allRecovered)-Math.min(...allRecovered)) * 100)
          },
          {
            'country': country3,
            'TotalDeaths': Math.round((DEATHS3-(Math.min(...allDeaths)))/(Math.max(...allDeaths)-Math.min(...allDeaths)) * 100),
            'deathsColor': `hsl(300, 70%, 50%)`,
            'TotalCases': Math.round((CASES3-(Math.min(...allCases)))/(Math.max(...allCases)-Math.min(...allCases)) * 100),
            "ActiveCases":  Math.round((ACTIVE3-(Math.min(...allActive)))/(Math.max(...allActive)-Math.min(...allActive)) * 100),
            "TodaysDeaths":Math.round((TODAYSDEATHS3-(Math.min(...allTodaysDeaths)))/(Math.max(...allTodaysDeaths)-Math.min(...allTodaysDeaths)) * 100),
            "DeathsPerMil":Math.round((DEATHSPERMIL3-(Math.min(...allDeathsPerMil)))/(Math.max(...allDeathsPerMil)-Math.min(...allDeathsPerMil)) * 100),
            "TodaysCases":Math.round((TODAYSCASES3-(Math.min(...allTodaysCases)))/(Math.max(...allTodaysCases)-Math.min(...allTodaysCases)) * 100),
            "CasesPerMil":Math.round((CASESPERMIL3-(Math.min(...allCasesPerMil)))/(Math.max(...allCasesPerMil)-Math.min(...allCasesPerMil)) * 100),
            "Recovered":Math.round((RECOVERED3-(Math.min(...allRecovered)))/(Math.max(...allRecovered)-Math.min(...allRecovered)) * 100)
          },
          {
            'country': country4,
            'TotalDeaths': Math.round((DEATHS4-(Math.min(...allDeaths)))/(Math.max(...allDeaths)-Math.min(...allDeaths)) * 100),
            'TotalCases': Math.round((CASES4-(Math.min(...allCases)))/(Math.max(...allCases)-Math.min(...allCases)) * 100),
            "ActiveCases":  Math.round((ACTIVE4-(Math.min(...allActive)))/(Math.max(...allActive)-Math.min(...allActive)) * 100),
            "TodaysDeaths":Math.round((TODAYSDEATHS4-(Math.min(...allTodaysDeaths)))/(Math.max(...allTodaysDeaths)-Math.min(...allTodaysDeaths)) * 100),
            "DeathsPerMil":Math.round((DEATHSPERMIL4-(Math.min(...allDeathsPerMil)))/(Math.max(...allDeathsPerMil)-Math.min(...allDeathsPerMil)) * 100),
            "TodaysCases":Math.round((TODAYSCASES4-(Math.min(...allTodaysCases)))/(Math.max(...allTodaysCases)-Math.min(...allTodaysCases)) * 100),
            "CasesPerMil":Math.round((CASESPERMIL4-(Math.min(...allCasesPerMil)))/(Math.max(...allCasesPerMil)-Math.min(...allCasesPerMil)) * 100),
            "Recovered":Math.round((RECOVERED4-(Math.min(...allRecovered)))/(Math.max(...allRecovered)-Math.min(...allRecovered)) * 100)
          },
          {
            'country': country5,
            'TotalDeaths': Math.round((DEATHS5-(Math.min(...allDeaths)))/(Math.max(...allDeaths)-Math.min(...allDeaths)) * 100),
            'TotalCases': Math.round((CASES5-(Math.min(...allCases)))/(Math.max(...allCases)-Math.min(...allCases)) * 100),
            "ActiveCases":  Math.round((ACTIVE5-(Math.min(...allActive)))/(Math.max(...allActive)-Math.min(...allActive)) * 100),
            "TodaysDeaths":Math.round((TODAYSDEATHS5-(Math.min(...allTodaysDeaths)))/(Math.max(...allTodaysDeaths)-Math.min(...allTodaysDeaths)) * 100),
            "DeathsPerMil":Math.round((DEATHSPERMIL5-(Math.min(...allDeathsPerMil)))/(Math.max(...allDeathsPerMil)-Math.min(...allDeathsPerMil)) * 100),
            "TodaysCases":Math.round((TODAYSCASES5-(Math.min(...allTodaysCases)))/(Math.max(...allTodaysCases)-Math.min(...allTodaysCases)) * 100),
            "CasesPerMil":Math.round((CASESPERMIL5-(Math.min(...allCasesPerMil)))/(Math.max(...allCasesPerMil)-Math.min(...allCasesPerMil)) * 100),
            "Recovered":Math.round((RECOVERED5-(Math.min(...allRecovered)))/(Math.max(...allRecovered)-Math.min(...allRecovered)) * 100)
          },
           {
            'country': country6,
            'TotalDeaths': Math.round((DEATHS6-(Math.min(...allDeaths)))/(Math.max(...allDeaths)-Math.min(...allDeaths)) * 100),
            'TotalCases': Math.round((CASES6-(Math.min(...allCases)))/(Math.max(...allCases)-Math.min(...allCases)) * 100),
            "ActiveCases":  Math.round((ACTIVE6-(Math.min(...allActive)))/(Math.max(...allActive)-Math.min(...allActive)) * 100),
            "TodaysDeaths":Math.round((TODAYSDEATHS6-(Math.min(...allTodaysDeaths)))/(Math.max(...allTodaysDeaths)-Math.min(...allTodaysDeaths)) * 100),
            "DeathsPerMil":Math.round((DEATHSPERMIL6-(Math.min(...allDeathsPerMil)))/(Math.max(...allDeathsPerMil)-Math.min(...allDeathsPerMil)) * 100),
            "TodaysCases":Math.round((TODAYSCASES6-(Math.min(...allTodaysCases)))/(Math.max(...allTodaysCases)-Math.min(...allTodaysCases)) * 100),
            "CasesPerMil":Math.round((CASESPERMIL6-(Math.min(...allCasesPerMil)))/(Math.max(...allCasesPerMil)-Math.min(...allCasesPerMil)) * 100),
            "Recovered":Math.round((RECOVERED6-(Math.min(...allRecovered)))/(Math.max(...allRecovered)-Math.min(...allRecovered)) * 100)
          },
          {
            'country': country7,
            'TotalDeaths': Math.round((DEATHS7-(Math.min(...allDeaths)))/(Math.max(...allDeaths)-Math.min(...allDeaths)) * 100),
            'TotalCases': Math.round((CASES7-(Math.min(...allCases)))/(Math.max(...allCases)-Math.min(...allCases)) * 100),
            "ActiveCases":  Math.round((ACTIVE7-(Math.min(...allActive)))/(Math.max(...allActive)-Math.min(...allActive)) * 100),
            "TodaysDeaths":Math.round((TODAYSDEATHS7-(Math.min(...allTodaysDeaths)))/(Math.max(...allTodaysDeaths)-Math.min(...allTodaysDeaths)) * 100),
            "DeathsPerMil":Math.round((DEATHSPERMIL7-(Math.min(...allDeathsPerMil)))/(Math.max(...allDeathsPerMil)-Math.min(...allDeathsPerMil)) * 100),
            "TodaysCases":Math.round((TODAYSCASES7-(Math.min(...allTodaysCases)))/(Math.max(...allTodaysCases)-Math.min(...allTodaysCases)) * 100),
            "CasesPerMil":Math.round((CASESPERMIL7-(Math.min(...allCasesPerMil)))/(Math.max(...allCasesPerMil)-Math.min(...allCasesPerMil)) * 100),
            "Recovered":Math.round((RECOVERED7-(Math.min(...allRecovered)))/(Math.max(...allRecovered)-Math.min(...allRecovered)) * 100)
          },
          {
            'country': country8,
            'TotalDeaths': Math.round((DEATHS8-(Math.min(...allDeaths)))/(Math.max(...allDeaths)-Math.min(...allDeaths)) * 100),
            'TotalCases': Math.round((CASES8-(Math.min(...allCases)))/(Math.max(...allCases)-Math.min(...allCases)) * 100),
            "ActiveCases":  Math.round((ACTIVE8-(Math.min(...allActive)))/(Math.max(...allActive)-Math.min(...allActive)) * 100),
            "TodaysDeaths":Math.round((TODAYSDEATHS8-(Math.min(...allTodaysDeaths)))/(Math.max(...allTodaysDeaths)-Math.min(...allTodaysDeaths)) * 100),
            "DeathsPerMil":Math.round((DEATHSPERMIL8-(Math.min(...allDeathsPerMil)))/(Math.max(...allDeathsPerMil)-Math.min(...allDeathsPerMil)) * 100),
            "TodaysCases":Math.round((TODAYSCASES8-(Math.min(...allTodaysCases)))/(Math.max(...allTodaysCases)-Math.min(...allTodaysCases)) * 100),
            "CasesPerMil":Math.round((CASESPERMIL8-(Math.min(...allCasesPerMil)))/(Math.max(...allCasesPerMil)-Math.min(...allCasesPerMil)) * 100),
            "Recovered":Math.round((RECOVERED8-(Math.min(...allRecovered)))/(Math.max(...allRecovered)-Math.min(...allRecovered)) * 100)
          },
          {
            'country': country9,
            'TotalDeaths': Math.round((DEATHS9-(Math.min(...allDeaths)))/(Math.max(...allDeaths)-Math.min(...allDeaths)) * 100),
            'TotalCases': Math.round((CASES9-(Math.min(...allCases)))/(Math.max(...allCases)-Math.min(...allCases)) * 100),
            "ActiveCases":  Math.round((ACTIVE9-(Math.min(...allActive)))/(Math.max(...allActive)-Math.min(...allActive)) * 100),
            "TodaysDeaths":Math.round((TODAYSDEATHS9-(Math.min(...allTodaysDeaths)))/(Math.max(...allTodaysDeaths)-Math.min(...allTodaysDeaths)) * 100),
            "DeathsPerMil":Math.round((DEATHSPERMIL9-(Math.min(...allDeathsPerMil)))/(Math.max(...allDeathsPerMil)-Math.min(...allDeathsPerMil)) * 100),
            "TodaysCases":Math.round((TODAYSCASES9-(Math.min(...allTodaysCases)))/(Math.max(...allTodaysCases)-Math.min(...allTodaysCases)) * 100),
            "CasesPerMil":Math.round((CASESPERMIL9-(Math.min(...allCasesPerMil)))/(Math.max(...allCasesPerMil)-Math.min(...allCasesPerMil)) * 100),
            "Recovered":Math.round((RECOVERED9-(Math.min(...allRecovered)))/(Math.max(...allRecovered)-Math.min(...allRecovered)) * 100)
          },
          {
            'country': country10,
            'TotalDeaths': Math.round((DEATHS10-(Math.min(...allDeaths)))/(Math.max(...allDeaths)-Math.min(...allDeaths)) * 100),
            'TotalCases': Math.round((CASES10-(Math.min(...allCases)))/(Math.max(...allCases)-Math.min(...allCases)) * 100),
            "ActiveCases":  Math.round((ACTIVE10-(Math.min(...allActive)))/(Math.max(...allActive)-Math.min(...allActive)) * 100),
            "TodaysDeaths":Math.round((TODAYSDEATHS10-(Math.min(...allTodaysDeaths)))/(Math.max(...allTodaysDeaths)-Math.min(...allTodaysDeaths)) * 100),
            "DeathsPerMil":Math.round((DEATHSPERMIL10-(Math.min(...allDeathsPerMil)))/(Math.max(...allDeathsPerMil)-Math.min(...allDeathsPerMil)) * 100),
            "TodaysCases":Math.round((TODAYSCASES10-(Math.min(...allTodaysCases)))/(Math.max(...allTodaysCases)-Math.min(...allTodaysCases)) * 100),
            "CasesPerMil":Math.round((CASESPERMIL10-(Math.min(...allCasesPerMil)))/(Math.max(...allCasesPerMil)-Math.min(...allCasesPerMil)) * 100),
            "Recovered":Math.round((RECOVERED10-(Math.min(...allRecovered)))/(Math.max(...allRecovered)-Math.min(...allRecovered)) * 100)
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
