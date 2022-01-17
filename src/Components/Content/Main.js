import { useContext, useEffect, useRef, useState } from "react";
import { WindowContext } from "../../Contexts/WindowContext";

import "./Main.css";

export default function Main({ children }) {
  const mainRef = useRef();

  const [visible, setVisible] = useState(false);

  const { windowScrollY } = useContext(WindowContext);

  useEffect(() => {
    const boundings = mainRef.current.getBoundingClientRect();

    setVisible(
      boundings.top < window.innerHeight - 30 &&
        boundings.top + boundings.height >= 0
    );
  }, [windowScrollY]);

  return (
    <main ref={mainRef} className={`main ${visible && "fade-in-right"}`}>
      {children}
    </main>
  );
}
