import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ background: "#333", padding: 10, display: "flex", gap: 10 }}>
      <Link to="/" style={{ color: "#fff" }}>Home</Link>
      <Link to="/events" style={{ color: "#fff" }}>Events</Link>
      <Link to="/dashboard" style={{ color: "#fff" }}>Dashboard</Link>
      <Link to="/login" style={{ color: "#fff" }}>Login</Link>
    </nav>
  );
}