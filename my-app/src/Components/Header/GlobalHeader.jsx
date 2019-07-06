import React from 'react';
import main_logo from '../../images/main_logo.png';
import './GlobalHeader.css';
import MenuNavigation from '../MenuNavigation/MenuNavigation';
import 'antd/dist/antd.css'
class GlobalHeader extends React.PureComponent {

    render() {
        return (
            <div className="header">
                <div className="left-header-info">
                    <img className="header-logo" src={main_logo}></img>
                    <MenuNavigation />
                </div>
                <a className="link-btn-header" href="https://docs.google.com/forms/d/e/1FAIpQLSccUO47qZLCx7RYQqtk3FuTVgIoHR-wueUdmjvllvrOe8kAbQ/viewform" target="_blank"><button> Зарегистрироваться </button></a>
            </div>
        )
    }
}

export default GlobalHeader;