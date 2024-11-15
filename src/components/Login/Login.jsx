import { GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import auth from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
    const [user,setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const handleGoogleSignIn = () =>{
        console.log(auth,googleProvider)
        signInWithPopup(auth,googleProvider)
        .then((result) =>{
            console.log(result.user)
            setUser(result.user);
        })
        .catch(error =>{
            console.log('Error',error);
            setUser(null);
        })
    }
    const handleGithubSignIn =() =>{
        signInWithPopup(auth,githubProvider)
        .then(result =>{
            console.log(result.user);
            setUser(result.user);
        })
        .catch(error => console.log('Error',error))
    
    }
    const handleSignOut = () =>{
        signOut(auth)
        .then(() =>{
            console.log('sign out done');
            setUser(null);
        })
        .catch(error => crossOriginIsolated.log(error))
    }
    return (
        <div>
            {/* <button onClick={handleGoogleSignIn}>Login wit google</button>
            <button onClick={handleSignOut}>Sign out</button> */}
            {
                user? <button onClick={handleSignOut}>Sign out</button>:
                <>
                     <button onClick={handleGoogleSignIn}>Login wit google</button>
                     <button onClick={handleGithubSignIn}>Login with Github</button>
                </>
            }
            { 
                user && <div>
                    <h4>{user.displayName}</h4>
                    <p>Email: {user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;