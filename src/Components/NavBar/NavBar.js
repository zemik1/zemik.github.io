import React from 'react';
import {NavLink} from "react-router-dom";
import BtnDarkMode from "../BtnDarkMode/BtnDarkMode";


function NavBar() {

    const activeLink = 'nav-list__link nav-list__link--active'
    const normalLink = 'nav-list__link'


    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink className='logo' to='/Home'>Zemnitskiy</NavLink>


                    <BtnDarkMode/>

                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink to='/Home' className={({isActive}) => isActive ? activeLink : normalLink}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to='/Contacts' className={({isActive}) => isActive ? activeLink : normalLink}>
                                Contacts
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar