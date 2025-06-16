import { Navigate, useLocation } from 'react-router';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Loading from '../Pages/Loading';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Loading />;
    }

    if (user && user.email) {
        return children;
    }

    // Pass original path to login page
    return <Navigate to="/auth/login" state={location.pathname} replace />;
};

export default PrivateRoute;
