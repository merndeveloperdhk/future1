import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'; 

const PrivateRoute = ({children}) => {
    const{user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);
    if(loading){
        return <h1>Loading....</h1>
    }
    if(user || user?.email  ){
        return children;
    }

    return <Navigate state={location.pathname} to='/login' replace></Navigate>
};

export default PrivateRoute;
PrivateRoute.propTypes={
    children:PropTypes.object
}