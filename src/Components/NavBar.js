import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    return (
    <div className="navbar" >
        <div className="container">
            <div className="grid align-center">
                <div className="col- navbar__container" >
                    <div className="navbar__logo">
                        <FontAwesomeIcon icon={faCloudSunRain} />
                    </div> 
                    <div className="navbar__menu">
                        <ul>
                            <li>Home</li>
                            <li>Photos</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}   

export default NavBar; 