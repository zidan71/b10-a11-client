import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import { auth } from '../../firebase.cofig';
export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [users,setUsers]= useState(null)
    const [loading, setLoading] = useState(true)

    const register = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const login = (email,password) => {
        setLoading( true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const authInfo = {
        users,
        loading,
        setLoading,
        register,
        login,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;