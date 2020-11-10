import axios from 'axios';

export const renderPieChart = () => {

    return async (dispatch, getState) => {
        const response = await axios(
            `https://data.cdc.gov/resource/k8wy-p9cg.json?county_name=Los Angeles County`

        );

        const ethnicityData = [];
        //for (let x = 0; x < 1; x++) 
        ethnicityData.push(
            {
                id: 'nonhispanicWhite',
                label: 'Non-Hispanic White',
                value: response.data[1].non_hispanic_white,
                color: 'hsl(263, 70%, 50%)',
            },
            {
                id: 'nonhispanicBlack',
                label: 'Non-Hispanic Black',
                value: response.data[1].non_hispanic_black,
                color: 'hsl(258, 70%, 50%)',
            },
            {
                id: 'nonhispanicAmericanIndian',
                label: 'Non-Hispanic American Indian',
                value: response.data[1].non_hispanic_american_indian,
                color: 'hsl(54, 70%, 50%)',
            },
            {
                id: 'nonhispanicAsian',
                label: 'Non-Hispanic Asian',
                value: response.data[1].non_hispanic_asian,
                color: 'hsl(53, 70%, 50%)',
            },
            {
                id: 'Hispanic',
                label: 'Hispanic',
                value: response.data[1].hispanic,
                color: 'hsl(119, 70%, 50%)',
            },
            {
                id: 'Other',
                label: 'Other',
                value: response.data[1].other,
                color: 'hsl(201, 70%, 50%)',
            },
            {
                id: 'Native Hawaiian and Other Pacific Islander-NHOPI',
                label: 'Native Hawaiian and Other Pacific Islander',
                value: response.data[1].nhopi,
                color: 'hsl(270, 70%, 50%)',
            }
        );

        dispatch({
            type: 'PIE_CHART',
            payload: ethnicityData

        });
    };
};

