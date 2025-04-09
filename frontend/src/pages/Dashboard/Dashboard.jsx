import { Navigate } from "react-router";
import useAuth from "../../hooks/useAuth";

const Dashboard = () => {

  const {hasCompletedStartup} = useAuth()

  if (hasCompletedStartup === false) {
    return <Navigate to="/starter" replace />;
  }

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard