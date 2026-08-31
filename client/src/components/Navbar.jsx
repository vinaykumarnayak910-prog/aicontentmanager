import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  return (
    <nav
      style={{
        backgroundColor: "#222",
        padding: "15px",
      }}
    >
      <Link
        to="/"
        arial-current={location.pathname === "/" ? "page" : undefined}
        style={{
          color: "white",
          marginRight: "20px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Dashboard
      </Link>

      <Link
        to="/generate"
        arial-current={location.pathname === "/generate" ? "page" : undefined}
        style={{
          color: "white",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Generate Content
      </Link>
    </nav>
  );
}

export default Navbar;