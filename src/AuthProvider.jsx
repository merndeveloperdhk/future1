import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "./firebase.config";
import PropTypes from 'prop-types';

export const AuthContext = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const[user, setUser] = useState(null);
    const[loading, setLoading] = useState(true);

    const createUser = (email, password)=> {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const login = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider)
    }
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=> {
     const unSubscribe =   onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
        });
        return(()=>{
            unSubscribe();
        })
    })

    const authInfo = {
        user, 
        createUser,
        loading,
        login,
        googleLogin,
        logOut
    }
    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            console.log("currentUser", currentUser);
            setLoading(false)
        });
        return()=> {
            return unsubscribe();
        }
    },[])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children:PropTypes.object
  }