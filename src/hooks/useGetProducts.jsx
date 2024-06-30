import { useEffect, useState } from 'react';
import axios from 'axios'

const useGetProducts = () => {

    const [allProducts, setAllProducts] = useState([]);
    const [isloading, setisLoading] = useState(false)

    useEffect(() => {
        getAllProducts();
    }, [])

    const getAllProducts = async () => {
        try {
            setisLoading(true);
            const response = await axios.get(`${import.meta.env.VITE_SERVER}/api/v1/product/all`);
            setAllProducts(response?.data?.products)
            setisLoading(false);
        } catch (error) {
            console.log(error)
        }
    }

    return { isloading, allProducts };

}

export default useGetProducts
