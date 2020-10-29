import axios from 'axios';

const url = 'https://covid19.mathdro.id/api/'; //API to be used in stats for accumulated number of cases, deaths, and recovery rates and updated by the daily

export const fetchData = async () => {
try {
    const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(url);

        return {confirmed, recovered, deaths, lastUpdate};
  }  catch (error) {
    
  }
}

