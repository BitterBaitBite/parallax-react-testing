import { useEffect, useState } from "react";
import Main from "./Components/Content/Main";
import Navbar from "./Components/Navigation/Navbar/Navbar";
import Navlink from "./Components/Navigation/Navbar/Navlink/Navlink";
import Quote from "./Components/Utils/Quote/Quote";
import { WindowContext } from "./Contexts/WindowContext";
import { NavContext } from "./Contexts/NavContext";
import "./styles.css";
import NavList from "./Components/Navigation/Navbar/NavList";

export default function App() {
  const [windowScrollY, setWindowScrollY] = useState(0);
  const [activeNavlink, setActiveNavlink] = useState(0);
  const [lastHoveredLink, setLastHoveredLink] = useState(0);

  const scrollHandler = (e) => {
    setWindowScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  useEffect(() => {
    setLastHoveredLink(activeNavlink);
  }, [activeNavlink]);

  return (
    <WindowContext.Provider value={{ windowScrollY, setWindowScrollY }}>
      <div className="App">
        <NavContext.Provider
          value={{
            activeNavlink,
            setActiveNavlink,
            lastHoveredLink,
            setLastHoveredLink
          }}
        >
          <Navbar logo={"Hola"}>
            <NavList bulletSize={5}>
              <Navlink to="">Link 1</Navlink>
              <Navlink to="">Link 2</Navlink>
              <Navlink to="">Link 3</Navlink>
            </NavList>
          </Navbar>
        </NavContext.Provider>

        <header>
          <h1>Title</h1>

          <h2>Subtitle!</h2>
        </header>

        <Main>
          <p>
            <strong>React</strong> is a free and open-source front-end
            JavaScript library for building user interfaces based on UI
            components. React can be used as a base in the development of
            single-page or mobile applications.
          </p>
          <br />
          <p>
            The following is a rudimentary example of React usage in HTML with
            JSX and JavaScript.
          </p>
          <br />
          <Quote>
            {`<script type="text/babel">
                function Greeter(props) {
                  return <h1>{props.greeting}</h1>;
                }
                let App = <Greeter greeting="Hello, World!" />;
                ReactDOM.render(App, document.getElementById('myReactApp'));
              </script>`}
          </Quote>
          <br />
          <p>
            The Greeter function is a React component that accepts a property
            greeting. The variable App is an instance of the Greeter component
            where the greeting property is set to 'Hello, World!'. The
            ReactDOM.render method then renders the Greeter component inside the
            DOM element with id myReactApp. When displayed in a web browser the
            result will be:
          </p>
          <br />
          <Quote>
            {`<div id="myReactApp">
              <h1>Hello, World!</h1>
              </div>`}
          </Quote>
          <br />
        </Main>
      </div>
    </WindowContext.Provider>
  );
}
