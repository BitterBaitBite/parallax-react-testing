import { useContext, useEffect, useRef, useState } from "react";
import { WindowContext } from "../../../Contexts/WindowContext";
import "./Quote.css";

export default function Quote({ children }) {
  const quoteRef = useRef();

  const [visible, setVisible] = useState(false);

  const { windowScrollY } = useContext(WindowContext);

  useEffect(() => {
    const boundings = quoteRef.current.getBoundingClientRect();

    setVisible(
      boundings.top < window.innerHeight - 30 &&
        boundings.top + boundings.height >= 0
    );
  }, [windowScrollY]);

  return (
    <p ref={quoteRef} className={`quote ${visible && "fade-in-right"}`}>
      {children}
    </p>
  );
}
