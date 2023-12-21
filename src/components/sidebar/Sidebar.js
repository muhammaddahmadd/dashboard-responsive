import { useState } from "react";
export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar bg-primary  ${isOpen ? "" : "close"}`}>
      {/* Logo, navigation links, profile details, etc. */}
      <button
        className="bx bx-menu "
        onClick={toggleSidebar}
        style={{ textSize: "10px" }}
      >
        btn
      </button>
    </div>
  );
}
