import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast'

const useGetAllUsers = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [allUsersData, setallUsersData] = useState([])


    useEffect(() => {
        getAllusers();
    }, []);

    const getAllusers = async () => {
        try {
            setIsLoading(true);
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Token not found');
            }

            const response = await axios.get(
                `${import.meta.env.VITE_SERVER}/api/v1/user/all`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setIsLoading(false);
            toast.success("Fetched all users")
            setallUsersData(response?.data?.users);
        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    };

    return { allUsersData, isLoading };
};

export default useGetAllUsers;
