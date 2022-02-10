import axios from 'axios';

const BASE_URL = 'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/'


export const getOneNews = async (id: string) => {
    return await axios.get(`${BASE_URL}${id}`, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
};


export const getAllNews = async () => {
    return await axios.get(`${BASE_URL}`, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
};

