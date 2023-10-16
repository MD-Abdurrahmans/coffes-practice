import { createContext, useState } from "react";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, deleteUser, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { getAuth, signOut } from "firebase/auth";
// import {db} from'firebase';

export const  authContext = createContext();
const googleProvider=  new GoogleAuthProvider()
const AuthProvider = ({children}) => {
const [user,setUser] = useState(null)
const [userUid,setUserUid] =useState(null)
const [loading,setLoading] = useState(true);

// create user signUp

const signUp = (email,password) =>{


     return createUserWithEmailAndPassword(auth,email,password)
    
}

// SignIn user

const login = (email,password) =>{

    return signInWithEmailAndPassword(auth,email,password);

}

// logout user
const logout = ()=>{
    return  signOut(auth)
}


// google login 

const googleLogin =()=>{
    
    return signInWithPopup(auth,googleProvider)
    
}

//  delete user from firebase 

const deleteUserFirebase =()=>{

    // const user = firebase.auth().currentUser;
 

    //   return  delete(user)
       
}

// update user name 

const  updateName = (name)=>{

    return updateProfile(auth.currentUser,{
        displayName: name,
      })
}



// onState
 const unSub =  onAuthStateChanged(auth,(currentUser)=>{

    setUser(currentUser)
    setLoading(false)
    setUserUid(user?.uid)
 return ()=>unSub()
 })







    console.log('state',user)
    const info={user, loading, signUp,login,logout, googleLogin,deleteUserFirebase,userUid ,updateName }

    return (
        <div>
            
            <authContext.Provider   value={info}  >
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;