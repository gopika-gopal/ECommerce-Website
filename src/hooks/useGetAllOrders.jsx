import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast'

const useGetAllOrders = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [allordersData, setallOrdersData] = useState([])


    useEffect(() => {
        getAllOrders();
    }, []);

    const getAllOrders = async () => {
        try {
            setIsLoading(true);
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Token not found');
            }

            const response = await axios.get(
                `${import.meta.env.VITE_SERVER}/api/v1/order/all`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setIsLoading(false);
            toast.success("Fetched all Orders")
            setallOrdersData(response?.data?.orders);
        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    };

    return { allordersData, isLoading };
};

export default useGetAllOrders;
