import axios from 'axios';

export const renderCOVIDCards = () => {
    return async (dispatch, getState) => {
        const response = await axios(
            `https://covid19.mathdro.id/api/`

        );

        const cardsData = [];
        cardsData.push({

            confirmed: response.data[confirmed.value],
            recovered: response.data[recovered.value],
            deaths: response.data[deaths.value],
            date: response.data[lastUpdate]

        }
        );

        dispatch({
            type: 'COVID_CARDS',
            payload: cardsData,
        });
    };
};