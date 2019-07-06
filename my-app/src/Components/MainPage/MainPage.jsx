import React from 'react';
import './MainPage.css';
import pictureReg from './../../images/reg.jpg';
import mainLogo from './../../images/main_logo.png';
import map from './../../images/map.png';

class MainPage extends React.Component {
    render() {
        return (
            <div className="main-container">
                <div className="block-start-info">
                    <div>
                        <h1>ФотоВелоМарафон</h1>
                        <h2>Летний ФотоВело: 26.07.2019 </h2>
                        <ul>
                            <li> Интересный маршрут по необычным местам Минска </li>
                            <li> Фотозадания, которые проявят весь ваш креатив </li>
                            <li> День проведенный с единомышленниками и на вашем железном коне </li>
                        </ul>
                    </div>
                    <div>
                        <img src={mainLogo}></img>
                    </div>
                </div>
                <div className="info-statistics">
                    <ul>
                        <li>
                            <div className="part-of-statistics">
                                <p className="fact-of-statistics">9 сезон</p>
                                <p className="description-fact">уже девать раз мы соединяли спорт и креатив в одно мероприятие </p>
                            </div>
                        </li>
                        <li>
                            <div className="part-of-statistics">
                                <p className="fact-of-statistics">75 фотозаданий</p>
                                <p className="description-fact">в сумме за все время получали наши марфонцы</p>
                            </div>
                        </li>
                        <li>
                            <div className="part-of-statistics">
                                <p className="fact-of-statistics">Более 500 участников</p>
                                <p className="description-fact">принимали участие в фотовело марафоне и были довольны </p>
                            </div>
                        </li>
                        <li>
                            <div className="part-of-statistics">
                                <p className="fact-of-statistics">20 км</p>
                                <p className="description-fact">столько в среднем составляет один наш маршрут </p>
                            </div>
                        </li>
                        <li>
                            <div className="part-of-statistics">
                                <p className="fact-of-statistics">95 подарочных пакетов</p>
                                <p className="description-fact">мы раздали нашим победителям в номинациях</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="second-block">
                    <img className="img-reg" src={pictureReg}></img>
                    <a className="reg-btn-link" href="https://docs.google.com/forms/d/e/1FAIpQLSccUO47qZLCx7RYQqtk3FuTVgIoHR-wueUdmjvllvrOe8kAbQ/viewform" target="_blank"><button className="reg-btn">Регистрация</button></a>
                </div>
                <div className="third-block">
                    <p className="header-label-tbl"> ФотоВелоМарафон - это </p>
                    <img src={map}></img>
                </div>
            </div>

        )
    }
}

export default MainPage;