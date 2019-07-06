import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './Components/Main/Main'
import { store } from './Services/configureStore';
import { Provider } from 'react-redux';
 
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Main />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
