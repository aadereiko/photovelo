import React from 'react';
import './Footer.css';
import inst from './../../images/social/blue/insta.png';
import vk from './../../images/social/blue/vk.png';
import telegram from './../../images/social/blue/telegr.png';
import mail from './../../images/social/blue/mail.png';

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer-container">
                <p className="label-footer">FVM.BSU@GMAIL.COM</p>
                    <a href="https://www.instagram.com/fotovelomarafon/" target="_blank"><img src={inst}></img>fotovelomarafon</a>
                    <a href="https://vk.com/foto_velo" target="_blank"><img src={vk}></img>foto_velo</a>
                    <a href="https://t.me/fotovelo" target="_blank"><img src={telegram}></img>fotovelo</a>
                    <a href="mailto:fvm.bsu@gmail.com" target="_blank"><img src={mail}></img>fvm.bsu@gmail.com</a>
                
                <p className="label-footer">Беларусь, г. Минск, ул. Кальварийская, 9, каб. 259</p>
            </div>
        )
    }
}