import axios from 'axios';

const host = import.meta.env.VITE_HOST

export const getUserBalance = async () => {
    const userId = localStorage.getItem('id');
    if (!userId) {
        throw new Error('User ID is missing');
    }
    const API_BASE_URL = `${host}/logPayment/get-balance/${userId}`;

    try {
        const response = await axios.get(API_BASE_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching user balance:', error);
        throw new Error('Failed to get user balance');
    }
};

export const getRecentTransactions = async () => {
    const userId = localStorage.getItem('id');
    if (!userId) {
        throw new Error('User ID is missing');
    }
    const API_BASE_URL = `${host}/logPayment/get-recent-transition/${userId}`;

    try {
        const response = await axios.get(API_BASE_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching recent transactions:', error);
        throw new Error('Failed to get recent transactions');
    }
};


export const getPaymentHistory = async () => {
    const userId = localStorage.getItem('id');
    if (!userId) {
        throw new Error('User ID is missing');
    }

    const API_BASE_URL = `${host}/logPayment/get-payment-history/${userId}`;

    try {
        const response = await axios.get(API_BASE_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching payment history:', error);
        throw new Error('Failed to get payment history');
    }
}
