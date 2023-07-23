import { useEffect, useState } from 'react';
import useAuth from './useAuth';
import axios from 'axios';

const useUser = () => {
    const { user } = useAuth();
    const [displayUser, setDisplayUser] = useState({});
    const url = `http://localhost:5000/users?email=${user?.email}`
    useEffect(() => {
        axios.get(url)
            .then(data => setDisplayUser(data.data))
    }, [url])
    return displayUser ;
};

export default useUser;