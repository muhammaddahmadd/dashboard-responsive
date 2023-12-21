import React, { useState } from "react";
import "./App.css"; // Import the CSS file
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";
// function Sidebar() {
//   const [isOpen, setIsOpen] = useState(true);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className={`sidebar ${isOpen ? "" : "close"}`}>
//       {/* Logo, navigation links, profile details, etc. */}
//       <button
//         className="bx bx-menu "
//         onClick={toggleSidebar}
//         style={{ textSize: "10px" }}
//       >
//         btn
//       </button>
//     </div>
//   );
// }

// function HomeSection() {
//   return (
//     <div className="home-section" style={{ paddingLeft: "10px" }}>
//       <div className="home-content">
//         <span className="text">TImebee</span>
//       </div>

//       <p>
//         ar far away, behind the word mountains, far from the countries Vokalia
//         and Consonantia, there live the blind texts. Separated they live in
//         Bookmarksgrove right at the coast of the Semantics, a large language
//         ocean. A small river named Duden flows by their place and supplies it
//         with the necessary regelialia. It is a paradisematic country, in which
//         roasted parts of sentences fly into your mouth. Even the all-powerful
//         Pointing has no control about the blind texts it is an almost
//         unorthographic life One day however a small line of blind text by the
//         name of Lorem Ipsum decided to leave for the far World of Grammar. The
//         Big Oxmox advised her not to do so, because there were thousands of bad
//         Commas, wild Question Marks and devious Semikoli, but the Little Blind
//         Text didn’t listen. She packed her seven versalia, put her initial into
//         the belt and made herself on the way. When she reached the first hills
//         of the Italic Mountains, she had a last view back on the skyline of her
//         hometown
//       </p>
//     </div>
//   );
// }

function App() {
  const [isOpen, setIsOpen] = useState(true); // State for sidebar visibility

  return (
    <div>
      <Sidebar isOpen={isOpen} toggleSidebar={() => setIsOpen(!isOpen)} />
      <Main />
    </div>
  );
}

export default App;
