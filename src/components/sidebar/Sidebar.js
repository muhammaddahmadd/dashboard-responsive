import { useState } from "react";
import { MdDashboardCustomize } from "react-icons/md";
import "./Sidebar.css"; // Assuming you save the CSS in a file named Sidebar.css
export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const arrayList = [
    "Dashboard",
    "Hours Tracked",
    "Web & Apps",
    "Activity Summary",
    "Screenshots",
    "User Management",
    "Project Costing",
    "Project and Tasks",
    "Groups",
    "Reports",
    "Download",
    "Billing",
  ];

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
          {/* <a href="javascript:void(0);" className="nav-link">
            <i className="fa fa-bars"></i>
          </a> */}
          ☰
        </button>

        {isOpen && (
          <ul className="d-block mt-4 text-white font-monospace navbar-nav">
            {arrayList.map((item, index) => (
              <li className="mb-4 text-uppercase nav-item" key={index}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
