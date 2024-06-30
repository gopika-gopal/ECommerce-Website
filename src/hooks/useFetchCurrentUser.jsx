import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const useFetchCurrentUser = (token) => {
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);

    const getCurrentUser = async (token) => {
        try {
            setIsLoading(true);
            if (!token) {
                return;
            }
            const response = await axios.get(
                `${import.meta.env.VITE_SERVER}/api/v1/user/me`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setIsLoading(false);
            dispatch(addUser(response?.data))
            // console.log(response?.data)
        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    };

    useEffect(() => {
        getCurrentUser(token);
    }, [])

    return { isLoading };
}

export default useFetchCurrentUser
