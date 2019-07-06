import React from 'react';
import './MenuNavigation.css'
import { Link } from 'react-router-dom';
import logoHeader from './../../images/logo-header.png';

class MenuNavigation extends React.Component { 
    menuItems = [
        {
            key: 'gallery',
            text: 'Галерея',
            link: 'gallery'
        },
        {
            key: 'contacts',
            text: 'Контакты',
            link: 'contacts'
        }
    ]
    render() {
        return (
            <div className="container-menu">
                <ul>
                    <li>
                        <Link to='/main'><img src={logoHeader}></img></Link>
                    </li>
                   {this.menuItems.map(item => <Link to={item.link}><li className="label-menu" key={item.key}>{item.text}</li></Link>)}
                </ul>
            </div>
        )
    }
}

export default MenuNavigation;