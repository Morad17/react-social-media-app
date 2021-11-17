import React from 'react'
import Person1 from '../assets/images/person-1.jpg'

import { Search, Person, Chat, Notifications } from '@mui/icons-material/'

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-left">
                <span className="logo">MyFace</span>
            </div>
            <div className="navbar-center">
                <div className="searchbar">
                    <Search className="search-icon" />
                    <input placeholder="Search" type="text" className="search-input" />
                </div>
            </div>
            <div className="navbar-right">
                <div className="page-links">
                    <span className="nav-page-link">
                        Home
                    </span>
                    <span className="nav-page-link">
                        My Profile
                    </span>
                </div>
                <div className="nav-icons">
                    <div className="nav-icon-link">
                        <span className="nav-icon-badge">
                            <Person />
                        </span>
                    </div>
                    <div className="nav-icon-link">
                        <span className="nav-icon-badge">
                            <Chat />
                        </span>
                    </div>
                    <div className="nav-icon-link">
                        <span className="nav-icon-badge">
                            <Notifications />
                        </span>
                    </div>
                    <img src={ Person1 } alt="" className="nav-image"/>
                </div>
            </div>
        </div>
    )
}

export default Navbar
