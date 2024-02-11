import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PublickdRoute({ children }) {
  const isAuth = useSelector((state) => state.auth.isAuth);
  if (isAuth) {
    return <Navigate to="/dashboard" />;
  }
  return children;
}

export default PublickdRoute;
