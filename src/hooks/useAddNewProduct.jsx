import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast'

const useAddNewProduct = () => {
    const [isLoading, setIsLoading] = useState(false);

    const addNewProduct = async ({ name, price, stock, category, photo }) => {
        try {
            setIsLoading(true);
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Token not found');
            }

            const response = await axios.post(
                `${import.meta.env.VITE_SERVER}/api/v1/product/new`,
                { name, price, stock, category, photo },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setIsLoading(false);
            toast.success("Product Added Successfully")
            return response.data;
        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    };

    return { addNewProduct, isLoading };
};

export default useAddNewProduct;
