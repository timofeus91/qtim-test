import React, { FC } from "react";
import {NavLink, useLocation} from "react-router-dom";
import './Header.css';

const Header: FC = () => {
    const routeWay = useLocation().pathname;

    const textHeader = routeWay === '/about-me' ? 'It is my personal information' : 'It is test task for Qtim';

    return (
        <header className="header">
            <h3 className="header__title">{textHeader}</h3>
            <div className="header__links">
            <NavLink className={({isActive}) =>
                isActive ? 'header__link header__link_active' : 'header__link'
            } to='/about-me'>
                Personal Page
            </NavLink>
                <NavLink className={({isActive}) =>
                    isActive ? 'header__link header__link_active' : 'header__link'
                } to='/'>
                    Main Page
                </NavLink>
            </div>
        </header>
    );

}

export default Header;
