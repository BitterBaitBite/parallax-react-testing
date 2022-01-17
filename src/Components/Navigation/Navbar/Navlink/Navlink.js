import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { NavContext } from "../../../../Contexts/NavContext";
import { NavlistContext } from "../NavList";
import "./Navlink.css";

export default function Navlink({ children }) {
  const linkRef = useRef();
  const {
    activeNavlink,
    setActiveNavlink,
    lastHoveredLink,
    setLastHoveredLink
  } = useContext(NavContext);
  const index = useContext(NavlistContext);

  return (
    <Link
      ref={linkRef}
      onClick={() => setActiveNavlink(index)}
      onMouseEnter={() => setLastHoveredLink(index)}
      to=""
      className={`navbar-link ${
        activeNavlink === index
          ? "active"
          : lastHoveredLink === index
          ? "last-hovered"
          : ""
      }`}
    >
      {children}
    </Link>
  );
}
