import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from '../../Firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createSignin = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (profile) =>{
        return updateProfile(auth.currentUser, profile)
    }

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, createUser =>{
            setUser(createUser);
        });

        return ()=>{
            return unsubscribe();
        }

    },[])

    const authInfo = {user, updateUser, createSignin, signIn}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;