import { useEffect, } from 'react';
import { useNavigate } from 'react-router';

// ==============================|| ELEMENT REFERENCE HOOKS  ||============================== //

const useUserIsLoggedIn = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/")
    }, [navigate])

}

export default useUserIsLoggedIn;