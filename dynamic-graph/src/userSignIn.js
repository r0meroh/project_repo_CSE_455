import React, {useState} from 'react';
import { useFirebase } from 'react-redux-firebase';
import { useHistory } from 'react-router-dom';





const SignIn = () => {
    const firebase = useFirebase();
    const history = useHistory();
    const [currentUser, setUser] = useState(false);

    const signInWithGoogle = () => {
        
        firebase
            .login({
                provider: "google",
                type: "popup",
            })
            .then(() => {
                history.push('');
                firebase.auth().onAuthStateChanged(function(user){
                    if(user){
                        console.log(user);
                    };
                });
                setUser(true);
            });
    };

    const logOutFunction = () => {
        firebase.logout();
        setUser(false);
        firebase.auth().onAuthStateChanged(function(user){
            if(user){
                console.log(user);
            }else{
                console.log('no user found, you are logged out');
            }
        });
    };

    return (
        <div>
            { currentUser ? <h1>user found</h1> : <h1>no user</h1>}
          
            
            <button onClick= {(e) => {
                e.preventDefault();
                signInWithGoogle();
                
            }} >
            Sign In with Google
            
            </button>

            <button onClick= {(e) => {
                e.preventDefault();
                logOutFunction();
            }}>
                Log Out
                
            </button>
           
            </div>
    );
};

export default SignIn;