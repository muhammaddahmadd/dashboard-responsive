import { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`sidebar px-3 bg-primary ${isOpen ? "" : "close"}`}>
        <button
          className="bx bx-menu mb-3 text-lg"
          style={{
            background: "none",
            color: "white",
            fontSize: "30px",
            marginLeft: 0,
          }}
          onClick={toggleSidebar}
        >
          ☰
        </button>

        {isOpen && (
          <ul className="d-block mt-4 text-white font-monospace navbar-nav">
            <li className="mb-4 text-uppercase nav-item">
              <Link to="/posts" className="nav-link">
                Posts
              </Link>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}
