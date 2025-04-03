import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase.cofig';
import axios from 'axios';
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
            const user = currentUser?.email
            setUsers(currentUser)
                        if(currentUser?.email){
                const user1 = {email : currentUser?.email}
                axios.post('https://assignment-11-server-pied-nu.vercel.app/jwt',user1,{withCredentials:true})
                .then(res => (res.data))
                setLoading(false)
            }
            else{
                axios.post('https://assignment-11-server-pied-nu.vercel.app/logOut',{},{withCredentials:true})
                .then(res=> (res.data))
                setLoading(false)
            }
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