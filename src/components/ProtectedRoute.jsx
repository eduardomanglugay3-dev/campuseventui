import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { EventContext } from "../context/EventContext";

export default function ProtectedRoute({ children }) {
  const { state } = useContext(EventContext);

  if (!state.isLoggedIn) return <Navigate to="/login" />;

  return children;
}