import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Header() {
    return (
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Click Game</h1>
                <p class="lead">Click on a picture, but not more than once!</p>
            </div>
        </div>
    );
}

export default Header;
