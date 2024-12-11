import axios from "axios";

const host = import.meta.env.VITE_HOST

export const getRecentlyMonthlyOrder = async () => {
    const API_BASE_URL = `${host}/statistic/spso/get-recently-monthly-order`;
    try {
        const response = await axios.post(API_BASE_URL,
            {},
            {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        if (response.status == 200) {
            return response.data;
        } else {
            throw new Error('Failed to get all orders');
        }
    } catch (error) {
        console.error('Error fetching all orders:', error);
        throw new Error('Failed to get all orders');
    }
};

export const getCurrentMonthlyOrder = async (month, year) => {
    let API_BASE_URL
    if (month === undefined) {
        API_BASE_URL = `${host}/statistic/spso/get-current-yearly-order/${year}`;
    } else {
        API_BASE_URL = `${host}/statistic/spso/get-current-monthly-order/${month}/${year}`;
    }

    try {
        const response = await axios.get(API_BASE_URL,
            {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
        if (response.status === 200) {
            return response.data;
        }
        else {
            throw new Error('Failed to get all orders');
        }
    } catch (error) {
        console.error('Error fetching all orders:', error);
        throw new Error('Failed to get all orders');
    }
}