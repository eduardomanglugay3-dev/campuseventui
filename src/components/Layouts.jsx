import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div style={{ padding: 20 }}>{children}</div>
    </>
  );
}