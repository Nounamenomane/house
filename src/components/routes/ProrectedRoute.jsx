import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProrectedRoute({ children }) {
  const isAuth = useSelector((state) => state.auth.isAuth);
  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default ProrectedRoute;
