import { useContext, useEffect, useRef, useState } from "react";
import { NavContext } from "../../../Contexts/NavContext";
import { WindowContext } from "../../../Contexts/WindowContext";
import "./Navbar.css";

export default function Navbar({ logo, children }) {
  const navbarRef = useRef();

  const [isSticky, setIsSticky] = useState(false);

  const { windowScrollY } = useContext(WindowContext);
  const { activeNavlink, setLastHoveredLink } = useContext(NavContext);

  useEffect(() => {
    windowScrollY > navbarRef.current.getBoundingClientRect().height / 2
      ? setIsSticky(true)
      : setIsSticky(false);
  }, [windowScrollY]);

  return (
    <div ref={navbarRef} className={`navbar ${isSticky ? "sticky" : ""}`}>
      <div
        className="navbar-container"
        onMouseLeave={() => setLastHoveredLink(activeNavlink)}
      >
        <div className="navbar-logo">{logo}</div>

        {children}
      </div>
    </div>
  );
}
