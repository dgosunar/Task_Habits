import React from 'react';
import './styles/generalStyles.css';
import './styles/App.css';
import { GeneralApp } from './componets/GeneralApp';

function App() {

  return (
    <GeneralApp route={"/contact"}>
    </GeneralApp>
  );
}

export default App;