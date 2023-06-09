import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleSidebar() {
    isOpen === false ? setIsOpen(true) : setIsOpen(false);
  }
  return (
    <header className="header">
      <h3>rodweleo.dev</h3>
      <div className={`nav_bar ${isOpen == true ? "active" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </div>
      <button onClick={toggleSidebar} style={{ background: "#213547" }}>
        <FaBars className="bars" />
      </button>
    </header>
  );
}
