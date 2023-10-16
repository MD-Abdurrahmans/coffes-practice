import { useContext } from "react";
import { authContext } from "../authProvider/AuthProvider";


const UseContext = () => {
    return  useContext(authContext);
};

export default UseContext;