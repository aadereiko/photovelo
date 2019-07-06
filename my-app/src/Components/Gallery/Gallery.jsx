import React from 'react';
import disob from './../../images/nominations/disob.jpg';
import distortion from './../../images/nominations/distortion.jpg';
import double from './../../images/nominations/double.jpg';
import error from './../../images/nominations/error.jpg';
import fairy from './../../images/nominations/fairy.jpg';
import freedom from './../../images/nominations/freedom.jpg';
import glasses from './../../images/nominations/glasses.jpg';
import not_that from './../../images/nominations/not that.jpg';
import not_found from './../../images/nominations/not-found.jpg';
import shicher from './../../images/nominations/shicher.jpg';
import unpublished from './../../images/nominations/unpublished.jpg';
import './Gallery.css';

export default class Gallery extends React.Component {
    listOfWinnerInNominations = [{
        picture: disob,
        author: 'Богдан Евгений',
        year: 2019,
        nomination: 'Непокорность',
    }, {
        picture: distortion,
        author: 'Григорьев Андрей',
        year: 2019,
        nomination: 'Искажение',
    }, {
        picture: double,
        author: 'Горбатенко Андрей',
        year: 2019,
        nomination: 'Двойные стандарты',
    }, {
        picture: unpublished,
        author: 'Володько Дмитрий',
        year: 2019,
        nomination: 'Неизданное',
    }, {
        picture: error,
        author: 'Карась Виктория',
        year: 2019,
        nomination: 'Последствие ошибки',
    }, {
        picture: not_found,
        author: 'Амбражейчик Александра',
        year: 2019,
        nomination: 'Ненайденная улика',
    }, {
        picture: fairy,
        author: 'Дубовик Иван',
        year: 2019,
        nomination: 'Сказка наяву',
    }, {
        picture: not_that,
        author: 'Трусило Яна',
        year: 2019,
        nomination: 'Ни то ни сё',
    }, {
        picture: shicher,
        author: 'Беспалов Дмитрий',
        year: 2019,
        nomination: 'Шухер',
    }, {
        picture: glasses,
        author: 'Богдан Евгений',
        year: 2019,
        nomination: 'Эффект розовых очков',
    }, {
        picture: freedom,
        author: 'Володько Алеся',
        year: 2019,
        nomination: 'Freedom',
    }]

    render() {
        return (
            <div className="gallery-container">
                <table>
                    {
                        this.listOfWinnerInNominations.map((nomination, index) =>
                            (index % 2)
                                ? (<tr className="dark-row">
                                    <td className="info-participant">
                                        <p className="gen-part"> Номинация: </p>
                                        <p className="pers-part"> {nomination.nomination} </p>
                                        <p className="gen-part"> Автор: </p>
                                        <p className="pers-part"> {nomination.author}</p>
                                        <p> {nomination.year}г. </p>
                                    </td>
                                    <td>
                                        <div className="img-nomination-container">
                                            <img className="img-nomination" src={nomination.picture}></img>
                                        </div>
                                    </td>
                                </tr>)
                                : (<tr>
                                    <td>
                                        <div className="img-nomination-container">
                                            <img className="img-nomination" src={nomination.picture}></img>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="gen-part"> Номинация: </p>
                                        <p className="pers-part"> {nomination.nomination} </p>
                                        <p className="gen-part"> Автор: </p>
                                        <p className="pers-part"> {nomination.author}</p>
                                        <p> {nomination.year}г.</p>
                                    </td>
                                </tr>)
                        )
                    }
                </table>
            </div>
        )
    }
}