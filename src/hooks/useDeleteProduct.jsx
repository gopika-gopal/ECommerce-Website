import { useState } from 'react';
import axios from 'axios';

const useDeleteProduct = () => {
    const [isLoading, setIsLoading] = useState(false);

    const deleteProduct = async (productId) => {
        try {
            setIsLoading(true);
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Token not found');
            }

            const response = await axios.delete(
                `${import.meta.env.VITE_SERVER}/api/v1/product/${productId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setIsLoading(false);
            return response.data;
        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    };

    return { deleteProduct, isLoading };
};

export default useDeleteProduct;
