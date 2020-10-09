import React from 'react';
import { useFirebase } from 'react-redux-firebase';
import { useHistory } from 'react-router-dom';




const SignIn = () => {
    const firebase = useFirebase();
    const history = useHistory();

    const signInWithGoogle = () => {
        
        firebase
            .login({
                provider: "google",
                type: "popup",
            })
            .then(() => {
                history.pushState('');
            });
    };

    return (
        <div>
            <h1>User Sign In</h1>
            <button onClick= {(e) => {
                e.preventDefault();
                signInWithGoogle();
            }} >
            Sign In with Google
            </button>
            </div>
    );
};

export default SignIn;