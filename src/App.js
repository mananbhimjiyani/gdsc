import './App.css';
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import React, {useRef} from "react";

import useScrollSpy from "react-use-scrollspy";

const App = () => {
    const sectionRefs = [useRef(null), useRef(null), useRef(null)];

    const activeSection = useScrollSpy({
        sectionElementRefs: sectionRefs,
        offsetPx: -80,
    });

    return (
        <div className="App">
            <header className="App-header">
                <LoadingScreen/>
            </header>
            <nav className="App-navigation">
        <span
            className={
                activeSection === 0
                    ? "App-navigation-item App-navigation-item--active"
                    : "App-navigation-item"
            }
        >
          Home
        </span>
                <span
                    className={
                        activeSection === 1
                            ? "App-navigation-item App-navigation-item--active"
                            : "App-navigation-item"
                    }
                >
          Events
        </span>
                <span
                    className={
                        activeSection === 2
                            ? "App-navigation-item App-navigation-item--active"
                            : "App-navigation-item"
                    }
                >
          About Us
        </span>
            </nav>
            <section className="App-section" ref={sectionRefs[0]}>
                <h1>Home</h1>
            </section>
            <section className="App-section" ref={sectionRefs[1]}>
                <h1>Events</h1>
            </section>
            <section className="App-section" ref={sectionRefs[2]}>
                <h1>About Us</h1>
            </section>
        </div>
    );
};

export default App;
