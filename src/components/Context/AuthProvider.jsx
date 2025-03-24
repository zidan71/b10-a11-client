import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
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

    const logOut = () => {
        setLoading(true)
       return signOut(auth)
    }

    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser,updatedData)
    }

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false)
            setUsers(currentUser)
            console.log(currentUser)
        })

        return  () => {
            unsubscribe()
        }
    },[])

    const authInfo = {
        users,
        loading,
        setLoading,
        register,
        login,
        logOut,
        updateUser,         
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;