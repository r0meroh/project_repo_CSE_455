import axios from 'axios';

export const renderPieChart = () => {

    return async (dispatch, getState) => {
        const response = await axios(
            `https://data.cdc.gov/resource/k8wy-p9cg.json?county_name=Los Angeles County`

        );

        const ethnicityData = [];
        //for (let x = 0; x < 1; x++) 
        ethnicityData.push(                 //IDs represent the titles in the pie region and 
            //labels represents the titles within the legend
            {
                id: 'Hispanic',
                label: 'Hispanic',
                value: response.data[1].hispanic,
                color: 'hsl(119, 70%, 50%)',
            },
            {
                id: 'Non-Hispanic White',
                label: 'Non-Hispanic White',
                value: response.data[1].non_hispanic_white,
                color: 'hsl(263, 70%, 50%)',
            },
            {
                id: 'Non-Hispanic Asian',
                label: 'Non-Hispanic Asian',
                value: response.data[1].non_hispanic_asian,
                color: 'hsl(53, 70%, 50%)',
            },
            {
                id: 'Non-Hispanic Black',
                label: 'Non-Hispanic Black',
                value: response.data[1].non_hispanic_black,
                color: 'hsl(258, 70%, 50%)',
            },
            {
                id: 'Native Hawaiian and Other Pacific Islander',
                label: 'Native Hawaiian and Other Pacific Islander-NHOPI',
                value: response.data[1].non_hispanic_nhopi,
                color: 'hsl(270, 70%, 50%)',
            },
            {
                id: 'NHAI',
                label: 'Non-Hispanic American Indian (NHAI)',
                value: response.data[1].non_hispanic_american_indian,
                color: 'hsl(54, 70%, 50%)',
            },

            {
                id: 'O',
                label: 'Other (O)',
                value: response.data[1].other,
                color: 'hsl(201, 70%, 50%)',
            },
        );

        dispatch({
            type: 'PIE_CHART',
            payload: ethnicityData

        });
    };
};

