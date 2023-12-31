import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useInstructor from '../hooks/useInstructor';

const InstructorRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const [isInstructor,isInstructorLoading] = useInstructor()
    const location = useLocation()
    if (loading || isInstructorLoading) {
        return <h2>loading..........</h2>
    }
    if (user && isInstructor) {
        return children;
    }
    return <Navigate to='/' state={{ from: location }} replace></Navigate>

};

export default InstructorRoute;