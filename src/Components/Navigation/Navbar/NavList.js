import { createContext, useContext, useEffect, useRef } from "react";
import { NavContext } from "../../../Contexts/NavContext";

export const NavlistContext = createContext();

export default function NavList({ children, bulletSize }) {
  const { activeHoveredNavlink, lastHoveredLink } = useContext(NavContext);
  const left = document.querySelector(".navbar-link")?.getBoundingClientRect()
    .left;
  const offsetLeft = document.querySelector(".navbar-link")?.offsetLeft;
  // const width = document.querySelector(".navbar-link")?.getBoundingClientRect()
  //   .width;
  const height = document.querySelector(".navbar-link")?.getBoundingClientRect()
    .height;
  const top = document.querySelector(".navbar-link")?.getBoundingClientRect()
    .top;

  return (
    <div className="navbar-link-container">
      <nav className="navbar-link-list">
        {children.map((child, i) => (
          <NavlistContext.Provider key={i} value={i}>
            {child}
          </NavlistContext.Provider>
        ))}
      </nav>
      <div
        class="slide-animation"
        style={{
          "--size": `${bulletSize}px`,
          top: top + Math.floor(height / 2) - Math.floor(bulletSize / 2),
          left: left - offsetLeft + 15 + 65 * lastHoveredLink,
          backgroundColor: lastHoveredLink ? "rgb(226, 71, 33)" : "transparent"
          // animation: "slideHoveredLink 0.6s ease-out running"
        }}
      ></div>
    </div>
  );
}
