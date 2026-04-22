import { useContext } from "react";
import { EventContext } from "../context/EventContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { dispatch } = useContext(EventContext);
  const navigate = useNavigate();

  const login = () => {
    dispatch({ type: "LOGIN" });
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={login}>Login</button>
    </div>
  );
}