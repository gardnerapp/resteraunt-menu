import React from "react";
import Section from "./components/section";
import Header from "./components/header";
import first from "./components/data/data";
import seventh from "./components/data/seventh";
import second from "./components/data/second";
import third from "./components/data/third";
import fourth from "./components/data/fourth";
import fifth from "./components/data/fifth";
import sixth from "./components/data/sixth";
import eight from "./components/data/eigth";

function App() {
    return (
        <div>
            <Header/>
            <Section menu={first}/>
            <Section menu={second}/>
            <Section menu={third}/>
            <Section menu={fourth}/>
            <Section menu={fifth}/>
            <Section menu={sixth}/>
            <Section menu={seventh}/>
            <Section menu={eight}/>
        </div>
    )
}

export default App;