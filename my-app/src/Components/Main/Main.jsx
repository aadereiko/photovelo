import React from 'react';
import GlobalHeader from './../Header/GlobalHeader';
import './Main.css';
import MainPage from '../MainPage/MainPage';
import { Switch, Route, Redirect } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';
import Contacts from '../Contacts/Contacts';
class Main extends React.Component {
    render() {
        return (
            <div className="main-content">
                <div className="not-footer">
                    <GlobalHeader />
                    <Switch>
                        <Route exact path="/main" component={MainPage} />
                        <Route exact path="/gallery" component={Gallery} />
                        <Route exact path="/contacts" component={Contacts} />
                        <Redirect to="/main" />
                    </Switch>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Main;