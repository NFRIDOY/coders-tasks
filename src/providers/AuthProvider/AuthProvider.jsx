import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut, updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import app from './../../utils/firebase.config';


export const AuthContext = createContext(null)


// eslint-disable-next-line react/prop-types
export default function AuthProvider({ children }) {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();



    const createUserEmailPass = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInEmailPass = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        toast.error("User Signed Out!!!")
        setLoading(true)
        return signOut(auth)
    }

    const updateUser = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name,
        })
            .then(() => {
                setUser(user)
                toast.success("Profile updated!")
            }).catch((error) => {
                toast.success("Profile updated! Failed")
                console.log(error)
            });
        if (user !== null) {
            const displayName = user.displayName;
            const email = user.email;

            setUser(user)
            const uid = user.uid;
        }
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("unSubscribe")
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
            if (currentUser) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const loggedInUser = { email: currentUser.email };

                console.log(loggedInUser)
            }
            // else {
            //     // User is signed out


            // }
        })

        return () => {
            unSubscribe()
        }
    }, [user])


    const info = { user, setUser, loading, setLoading, createUserEmailPass, signInEmailPass, googleSignIn, logOut, updateUser };
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

// export default AuthProvider;