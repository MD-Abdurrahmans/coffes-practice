import { Navigate } from "react-router-dom";
import UseContext from "../firebase/useContext";

const PrivateRoute = ({children}) => {

    const {user,loading}= UseContext();

if(loading){
    return <h1 className="text-5xl text-red-500 text-center">Loading...</h1>
}

    if(user?.email){

        return  children;
    }

     return <Navigate to='/signin'></Navigate>
    
};

export default PrivateRoute;