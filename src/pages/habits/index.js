import React from 'react';
import './Styles/generalStyles.css';
import './Styles/App.css';
import { GeneralApp } from './componets/GeneralApp';

function App() {

  return (
      <GeneralApp route={"/habits"}>
      </GeneralApp>
  );
}

export default App;