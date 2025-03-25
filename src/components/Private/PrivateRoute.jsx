import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {users,loading} = useContext(AuthContext)
    const location = useLocation()

    if(users){
        return children;
    }

    if(loading) {
        return <span className="loading loading-ring loading-xl "></span>

    }

    return <Navigate state={location.pathname} to={'/login'}></Navigate>;
};

export default PrivateRoute;