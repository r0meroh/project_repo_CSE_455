import axios from 'axios';

const url = 'https://covid19.mathdro.id/api/'; //API to be used in stats for accumulated number of cases, deaths, and recovery rates and updated by the daily
//const url2 = 'https://disease.sh/v3/covid-19/historical?lastdays=30'; //API to use for graphs--contains the time-series (by day over last 30 days) stats for each country
//const url3 = 'https://covid19.mathdro.id/api/countries'; //API to use for displaying all the country names on drop-down country selector button

export const fetchData = async () => {
try {
    const { data: {confirmed, recovered, deaths, updatedAt} } = await axios.get(url);

        return {confirmed, recovered, deaths, updatedAt};
  }  catch (error) {
    
  }
}

/*up to this point is the code required for API call to the dataset for card display of data/*


// export const fetchDailyData = async () => {
//   try {
//     const { data } = await axios.get(url2);
//     const modifiedData = data.map((dailyData) => ({
//       confirmed: dailyData.confirmed.total,
//       deaths: dailyData.deaths.total,
//       date: dailyData.reportDate,
//     }));
//     return modifiedData;
//   }

// catch (error) {
    
//   }
// };

// export const fetchCountries = async () => {
//   try {
//     const {data: {countries}} = await axios.get(url3);
 
//     return countries.map((country) => country.name);
//   } catch (error) {
  
//   }
}
