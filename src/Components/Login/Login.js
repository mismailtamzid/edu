import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Authentication from '../../firebase/firebase.init';

Authentication()
const Login = () => {
    const auth = getAuth();
   const googleProvider = new GoogleAuthProvider();
   
    const googleLogin = () => {
        signInWithPopup(auth, googleProvider) 
            .then((result) => {
            console.log(result.user);
        })
    }
    return (
        <div className='pt-5'>
            <button onClick={googleLogin}>google signin</button>
        </div>
    );
};

export default Login;