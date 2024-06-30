import axios from 'axios';
import { useEffect, useState } from 'react';

const useGetProductDetails = (id) => {

    const [isloading, setIsloading] = useState(false);
    const [productData, setProductData] = useState([])

    useEffect(() => {
        getProductDetails(id);
    }, [id]);

    const getProductDetails = async (id) => {
        try {
            setIsloading(true);
            const response = await axios.get(`${import.meta.env.VITE_SERVER}/api/v1/product/${id}`);
            setProductData(response?.data);
            setIsloading(false)

        } catch (error) {
            console.log(error)
        }
    }
    return {
        isloading, productData
    };
}

export default useGetProductDetails
