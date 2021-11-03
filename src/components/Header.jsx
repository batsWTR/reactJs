import React from 'react';
import '../scss/header.scss';


export default class Header extends React.Component{

    render(){
        return (
            <header className="header">
                <img src="./images/Reservia.svg" alt="logo" />
                <nav className="header--nav">
                    <ul>
                        <li><a href="">Hebergement</a></li>
                        <li><a href="">Activites</a></li>
                        <li><a href="">S'inscrire</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}