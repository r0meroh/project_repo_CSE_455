import axios from 'axios';

export const renderWorldGraph = () => {
    return {
      type: 'WORLD_GRAPH',
      payload: [
        {
          id: 'AFG',
          value: 661183,
        },
        {
          id: 'AGO',
          value: 186160,
        },
        {
          id: 'ALB',
          value: 5402,
        },
        {
          id: 'ARE',
          value: 436050,
        },
        {
          id: 'ARG',
          value: 193291,
        },
        {
          id: 'ARM',
          value: 658016,
        },
        {
          id: 'ATA',
          value: 272600,
        },
        {
          id: 'ATF',
          value: 473207,
        },
        {
          id: 'AUT',
          value: 779747,
        },
        {
          id: 'AZE',
          value: 237045,
        },
        {
          id: 'BDI',
          value: 87679,
        },
        {
          id: 'BEL',
          value: 997006,
        },
        {
          id: 'BEN',
          value: 487122,
        },
        {
          id: 'BFA',
          value: 89005,
        },
        {
          id: 'BGD',
          value: 723117,
        },
        {
          id: 'BGR',
          value: 17350,
        },
        {
          id: 'BHS',
          value: 446760,
        },
        {
          id: 'BIH',
          value: 28192,
        },
        {
          id: 'BLR',
          value: 756191,
        },
        {
          id: 'BLZ',
          value: 455196,
        },
        {
          id: 'BOL',
          value: 60024,
        },
        {
          id: 'BRN',
          value: 505782,
        },
        {
          id: 'BTN',
          value: 226709,
        },
        {
          id: 'BWA',
          value: 691880,
        },
        {
          id: 'CAF',
          value: 296,
        },
        {
          id: 'CAN',
          value: 259612,
        },
        {
          id: 'CHE',
          value: 391964,
        },
        {
          id: 'CHL',
          value: 995714,
        },
        {
          id: 'CHN',
          value: 413671,
        },
        {
          id: 'CIV',
          value: 639668,
        },
        {
          id: 'CMR',
          value: 466193,
        },
        {
          id: 'COG',
          value: 214128,
        },
        {
          id: 'COL',
          value: 175895,
        },
        {
          id: 'CRI',
          value: 639791,
        },
        {
          id: 'CUB',
          value: 777504,
        },
        {
          id: '-99',
          value: 966066,
        },
        {
          id: 'CYP',
          value: 781445,
        },
        {
          id: 'CZE',
          value: 344817,
        },
        {
          id: 'DEU',
          value: 206886,
        },
        {
          id: 'DJI',
          value: 170378,
        },
        {
          id: 'DNK',
          value: 411760,
        },
        {
          id: 'DOM',
          value: 642882,
        },
        {
          id: 'DZA',
          value: 696760,
        },
        {
          id: 'ECU',
          value: 588246,
        },
        {
          id: 'EGY',
          value: 382491,
        },
        {
          id: 'ERI',
          value: 386399,
        },
        {
          id: 'ESP',
          value: 65882,
        },
        {
          id: 'EST',
          value: 537970,
        },
        {
          id: 'ETH',
          value: 730449,
        },
        {
          id: 'FIN',
          value: 277077,
        },
        {
          id: 'FJI',
          value: 997922,
        },
        {
          id: 'FLK',
          value: 613634,
        },
        {
          id: 'FRA',
          value: 530710,
        },
        {
          id: 'GAB',
          value: 681738,
        },
        {
          id: 'GBR',
          value: 84312,
        },
        {
          id: 'GEO',
          value: 827233,
        },
        {
          id: 'GHA',
          value: 408884,
        },
        {
          id: 'GIN',
          value: 838922,
        },
        {
          id: 'GMB',
          value: 61521,
        },
        {
          id: 'GNB',
          value: 263516,
        },
        {
          id: 'GNQ',
          value: 170950,
        },
        {
          id: 'GRC',
          value: 658587,
        },
        {
          id: 'GTM',
          value: 568210,
        },
        {
          id: 'GUY',
          value: 472299,
        },
        {
          id: 'HND',
          value: 461017,
        },
        {
          id: 'HRV',
          value: 895516,
        },
        {
          id: 'HTI',
          value: 294242,
        },
        {
          id: 'HUN',
          value: 392101,
        },
        {
          id: 'IDN',
          value: 88451,
        },
        {
          id: 'IND',
          value: 772369,
        },
        {
          id: 'IRL',
          value: 425832,
        },
        {
          id: 'IRN',
          value: 446273,
        },
        {
          id: 'IRQ',
          value: 701971,
        },
        {
          id: 'ISL',
          value: 489406,
        },
        {
          id: 'ISR',
          value: 181307,
        },
        {
          id: 'ITA',
          value: 113490,
        },
        {
          id: 'JAM',
          value: 431585,
        },
        {
          id: 'JOR',
          value: 909995,
        },
        {
          id: 'JPN',
          value: 499626,
        },
        {
          id: 'KAZ',
          value: 381843,
        },
        {
          id: 'KEN',
          value: 254109,
        },
        {
          id: 'KGZ',
          value: 632961,
        },
        {
          id: 'KHM',
          value: 558198,
        },
        {
          id: 'OSA',
          value: 831853,
        },
        {
          id: 'KWT',
          value: 663862,
        },
        {
          id: 'LAO',
          value: 512868,
        },
        {
          id: 'LBN',
          value: 215122,
        },
        {
          id: 'LBR',
          value: 475922,
        },
        {
          id: 'LBY',
          value: 559013,
        },
        {
          id: 'LKA',
          value: 802721,
        },
        {
          id: 'LSO',
          value: 945536,
        },
        {
          id: 'LTU',
          value: 252310,
        },
        {
          id: 'LUX',
          value: 990916,
        },
        {
          id: 'LVA',
          value: 805447,
        },
        {
          id: 'MAR',
          value: 291298,
        },
        {
          id: 'MDA',
          value: 925024,
        },
        {
          id: 'MDG',
          value: 744921,
        },
        {
          id: 'MEX',
          value: 910499,
        },
        {
          id: 'MKD',
          value: 536970,
        },
        {
          id: 'MLI',
          value: 194118,
        },
        {
          id: 'MMR',
          value: 252790,
        },
        {
          id: 'MNE',
          value: 421291,
        },
        {
          id: 'MNG',
          value: 141649,
        },
        {
          id: 'MOZ',
          value: 58511,
        },
        {
          id: 'MRT',
          value: 326321,
        },
        {
          id: 'MWI',
          value: 926849,
        },
        {
          id: 'MYS',
          value: 642650,
        },
        {
          id: 'NAM',
          value: 790566,
        },
        {
          id: 'NCL',
          value: 868167,
        },
        {
          id: 'NER',
          value: 995865,
        },
        {
          id: 'NGA',
          value: 687756,
        },
        {
          id: 'NIC',
          value: 525467,
        },
        {
          id: 'NLD',
          value: 628643,
        },
        {
          id: 'NOR',
          value: 774285,
        },
        {
          id: 'NPL',
          value: 753553,
        },
        {
          id: 'NZL',
          value: 865679,
        },
        {
          id: 'OMN',
          value: 617971,
        },
        {
          id: 'PAK',
          value: 434427,
        },
        {
          id: 'PAN',
          value: 961998,
        },
        {
          id: 'PER',
          value: 790952,
        },
        {
          id: 'PHL',
          value: 59228,
        },
        {
          id: 'PNG',
          value: 756117,
        },
        {
          id: 'POL',
          value: 904790,
        },
        {
          id: 'PRI',
          value: 149097,
        },
        {
          id: 'PRT',
          value: 976769,
        },
        {
          id: 'PRY',
          value: 393756,
        },
        {
          id: 'QAT',
          value: 21034,
        },
        {
          id: 'ROU',
          value: 766265,
        },
        {
          id: 'RUS',
          value: 372409,
        },
        {
          id: 'RWA',
          value: 771697,
        },
        {
          id: 'ESH',
          value: 790362,
        },
        {
          id: 'SAU',
          value: 41394,
        },
        {
          id: 'SDN',
          value: 765329,
        },
        {
          id: 'SDS',
          value: 562310,
        },
        {
          id: 'SEN',
          value: 76402,
        },
        {
          id: 'SLB',
          value: 310306,
        },
        {
          id: 'SLE',
          value: 667286,
        },
        {
          id: 'SLV',
          value: 339446,
        },
        {
          id: 'ABV',
          value: 311801,
        },
        {
          id: 'SOM',
          value: 103637,
        },
        {
          id: 'SRB',
          value: 229811,
        },
        {
          id: 'SUR',
          value: 59585,
        },
        {
          id: 'SVK',
          value: 517438,
        },
        {
          id: 'SVN',
          value: 441343,
        },
        {
          id: 'SWZ',
          value: 773916,
        },
        {
          id: 'SYR',
          value: 264279,
        },
        {
          id: 'TCD',
          value: 458130,
        },
        {
          id: 'TGO',
          value: 929959,
        },
        {
          id: 'THA',
          value: 691326,
        },
        {
          id: 'TJK',
          value: 278809,
        },
        {
          id: 'TKM',
          value: 361515,
        },
        {
          id: 'TLS',
          value: 114073,
        },
        {
          id: 'TTO',
          value: 841388,
        },
        {
          id: 'TUN',
          value: 270284,
        },
        {
          id: 'TUR',
          value: 145278,
        },
        {
          id: 'TWN',
          value: 97983,
        },
        {
          id: 'TZA',
          value: 551013,
        },
        {
          id: 'UGA',
          value: 541410,
        },
        {
          id: 'UKR',
          value: 106409,
        },
        {
          id: 'URY',
          value: 560560,
        },
        {
          id: 'USA',
          value: 836654,
        },
        {
          id: 'UZB',
          value: 914319,
        },
        {
          id: 'VEN',
          value: 940367,
        },
        {
          id: 'VNM',
          value: 629701,
        },
        {
          id: 'VUT',
          value: 170219,
        },
        {
          id: 'PSE',
          value: 921901,
        },
        {
          id: 'YEM',
          value: 608434,
        },
        {
          id: 'ZAF',
          value: 536092,
        },
        {
          id: 'ZMB',
          value: 551179,
        },
        {
          id: 'ZWE',
          value: 752936,
        },
        {
          id: 'KOR',
          value: 425838,
        },
      ],
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
      let country1 = '';
      let country2 = '';
      let country3 = '';
      let country4 = '';
      let country5 = '';
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
        type: 'GET_GRAPH',
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
  export const lineGraph = () =>  {
   
    return async (dispatch, getState) => {
        const response = await axios.get(`https://disease.sh/v3/covid-19/nyt/counties/Los%20Angeles?lastdays=15`);
        console.log("request",response.data);
        
        const labels = [];
        const data = [];
        const deathData = [];

        for (let x = 0; x < response.data.length; x++){
            data.push(response.data[x].cases)
            labels.push(response.data[x].date)
            deathData.push(response.data[x].deaths)
        };

        console.log('data', data);
        console.log('labels',labels);
        
        dispatch({
            type: "GRAPH",
            payload: {
                data,
                labels,
                deathData
            }
        });
    };

    };
    // return {  
    // type: 'GRAPH',
    // payload: response.data
    // };



export const eraseGraph = () => {
    return {
        type: 'ERASE'
    };
};