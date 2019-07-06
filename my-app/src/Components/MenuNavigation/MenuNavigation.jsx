import React from 'react';
import './MenuNavigation.css'
import { Link } from 'react-router-dom';

class MenuNavigation extends React.Component { 
    menuItems = [
        {
            key: 'main',
            text: 'Главная',
            link: 'main'
        },
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
                   {this.menuItems.map(item => <Link to={item.link}><li key={item.key}><a>{item.text}</a></li></Link>)}
                </ul>
            </div>
        )
    }
}

export default MenuNavigation;