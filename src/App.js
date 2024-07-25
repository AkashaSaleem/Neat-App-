import './App.css';
import NeatTextAbout from './Components/NeatTextAbout';
import NeatTextNavbar from './Components/NeatTextNavbar';
import NeatTextForm from './Components/NeatTextForm';
import NeatTextAlert from './Components/NeatTextAlert';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [appMode, setAppMode] = useState('light'); // Whether dark mode is enabled or not
  const [appAlert, setAppAlert] = useState(null); // General alert state

  const toggleAppMode = () => {
    if (appMode === 'light') {
      setAppMode('dark');
      document.body.style.backgroundColor = '#301934';
      displayAlert("Dark mode has been enabled", "success");
      document.title = "Neat Text - Dark Mode";
      setInterval(() => {
        document.title = "Neat Text is an amazing experience";
      }, 2000);
      setInterval(() => {
        document.title = "Install Neat Text";
      }, 1500);
    } else {
      setAppMode('light');
      document.body.style.backgroundColor = 'white';
      displayAlert("Light mode has been enabled", "success");
      document.title = "Neat Text - Light Mode";
    }
  }

  const displayAlert = (message, type) => {
    setAppAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAppAlert(null);
    }, 1500);
  }

  return (
    <>
      <Router>
        <NeatTextNavbar title="Neat Text" appMode={appMode} toggleAppMode={toggleAppMode} />
        <NeatTextAlert appAlert={appAlert}/>
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <NeatTextAbout mode={appMode} />
            </Route>
            <Route exact path="/">
              <NeatTextForm showAlert={displayAlert} heading="Try Neat Text - word counter, character counter, and more." mode={appMode}/>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;













































