import React from 'react';
import './MainPage.css';
import pictureReg from './../../images/reg.jpg';
import pictureFamily from './../../images/1.jpg';
import pictureCreative from './../../images/2.jpg';
import pictureFun from './../../images/3.jpg';

class MainPage extends React.Component {
    render() {
        return (
            <div className="main-container">
                <div className="first-block">
                 ФотоВелоМарафон - это спортивное мероприятие, которое дает возможность не только проверить себя на выносливость, но и проявить свою креативность. Проект состоит из двух ингредиентов: интересный маршрут и необычные фотозадания. Раскрыть свой талант просто, как и получить памятные призы.    
                </div>    
                <img className="img-reg" src={pictureReg}></img>
                <a className="reg-btn-link"  href="https://docs.google.com/forms/d/e/1FAIpQLSccUO47qZLCx7RYQqtk3FuTVgIoHR-wueUdmjvllvrOe8kAbQ/viewform" target="_blank"><button className="reg-btn">Регистрация</button></a>
                <div className="third-block-table">
                <p className="header-label-tbl"> ФотоВелоМарафон - это</p>
                <table class="table-info">
                    <tr>
                        <td><img className="picture-table" src={pictureFamily}></img></td>
                        <td><img className="picture-table" src={pictureCreative}></img></td>
                        <td><img className="picture-table" src={pictureFun}></img></td>
                    </tr>
                    <tr>
                        <td className="label-tbl"> Семья </td>
                        <td className="label-tbl"> Креативность </td>
                        <td className="label-tbl"> Веселье </td>                        
                    </tr>
                </table>
                </div>
            </div>

        )
    }
}

export default MainPage;