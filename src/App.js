import './App.css';
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import React, { useRef } from "react";
import useScrollSpy from "react-use-scrollspy";
import Home from "./components/Home/Home";
import ControlledCarousel from "./components/EventsCard/Eventscards";

const App = () => {
    const sectionRefs = [useRef(null), useRef(null), useRef(null)];

    const activeSection = useScrollSpy({
        sectionElementRefs: sectionRefs,
        offsetPx: +200,
    });

    const scrollToSection = (index) => {
        sectionRefs[index].current.scrollIntoView({
            behavior: 'smooth'
        });
    };

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
                    onClick={() => scrollToSection(0)}
                >
                    Home
                </span>
                <span
                    className={
                        activeSection === 1
                            ? "App-navigation-item App-navigation-item--active"
                            : "App-navigation-item"
                    }
                    onClick={() => scrollToSection(1)}
                >
                    Events
                </span>
                <span
                    className={
                        activeSection === 2
                            ? "App-navigation-item App-navigation-item--active"
                            : "App-navigation-item"
                    }
                    onClick={() => scrollToSection(2)}
                >
                    About Us
                </span><span
                    className={
                        activeSection === 3
                            ? "App-navigation-item App-navigation-item--active"
                            : "App-navigation-item"
                    }
                    onClick={() => scrollToSection(3)}
                >
                    Team
                </span>
            </nav>
            <section className="App-section" ref={sectionRefs[0]}>
                <h1 className="gdsc-header">What Is <span className="gdsc-highlight">GDSC</span>?</h1>
                <Home/>
            </section>
            <section className="App-section" ref={sectionRefs[1]}>
                <h1>Events</h1>
                <ControlledCarousel/>
            </section>
            <section className="App-section" ref={sectionRefs[2]}>
                <h1>About Us</h1>
            </section>
            <section className="App-section" ref={sectionRefs[3]}>
                <h1>About Us</h1>
            </section>
        </div>
    );
};

export default App;
