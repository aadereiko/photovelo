import React from 'react';
import team from './../../images/team.jpg';
import './Contacts.css';
import inst from './../../images/social/blue/insta.png';
import vk from './../../images/social/blue/vk.png';
import telegram from './../../images/social/blue/telegr.png';
import mail from './../../images/social/blue/mail.png';

export default class Contacts extends React.Component {
    render() {
        return (
            <div className="contacts-container">
                <h1>КОМАНДА ЖДЕТ ВАС В НОВОМ СЕЗОНЕ!</h1>
                <div className="info-contacts">
                    <div className="manager-info">
                        <h3> Руководитель проекта: </h3>
                        <h3> Чекуришвили Марика, +375293889970 </h3>
                        <h3> chekurishvili1marika@gmail.com </h3>
                    </div>
                    <div className="social-icons">
                        <table>
                            <tr>
                                <td>
                                <a href="https://vk.com/foto_velo" target="_blank"><img src={vk}></img></a>
                                </td>
                                <td>
                                    <a href="https://vk.com/foto_velo" target="_blank" className="label-url">foto_velo</a>
                                </td>
                                <td>
                                    <a href="https://www.instagram.com/fotovelomarafon/" target="_blank"><img src={inst}></img></a>
                                </td>
                                <td>
                                    <a href="https://www.instagram.com/fotovelomarafon/" target="_blank" className="label-url"> fotovelomarafon </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="https://t.me/fotovelo" target="_blank"><img src={telegram}></img></a>
                                </td>
                                <td>
                                    <a href="https://t.me/fotovelo" target="_blank" className="label-url">fotovelo</a>
                                </td>
                                <td>
                                    <a href="mailto:fvm.bsu@gmail.com" target="_blank"><img src={mail}></img></a>
                                </td>
                                <td>
                                    <a href="mailto:fvm.bsu@gmail.com" target="_blank" className="label-url">fvm.bsu@gmail.com</a>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <img src={team} className="team"></img>
            </div>
        );
    }
}