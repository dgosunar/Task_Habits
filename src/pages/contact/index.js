import React from 'react';
import './Styles/generalStyles.css';
import './Styles/App.css';
import { GeneralApp } from './componets/GeneralApp';

function App() {

  return (
    <GeneralApp route={"/contact"}>
    </GeneralApp>
  );
}

export default App;