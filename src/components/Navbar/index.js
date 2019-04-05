import React from "react";
import "./style.css";

const Navbar = props =>(
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <h1>Clicky Game</h1>
        <div className="scores">
            Score:{props.score} | Highscore:{props.highscore}
        </div>
    </nav>
    </div>
);

export default Navbar;
