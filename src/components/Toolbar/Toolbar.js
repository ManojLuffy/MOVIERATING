import React from 'react';
import {NavLink} from 'react-router-dom';

import './Toolbar.css';
import RatingLogo from "../../assets/images/rating.png";

const Toolbar = (props) => {
    return (
    <div>
        <header className="Toolbar">
            <img className="logo" src={RatingLogo} alt="logo-rating" />
                <ul>
                        <NavLink to="/" exact> Home </NavLink>
                        <NavLink to="/movies"> Movies </NavLink>
                        <NavLink to="/tv"> Tv Shows </NavLink>
                </ul>
            <input type="text" placeholder="Search..." /> 
        </header>
    </div>
    );
}
 
export default Toolbar;