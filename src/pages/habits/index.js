import React from 'react';
import { GeneralApp } from '../../Componets/GeneralApp';

function Habits() {

  return (
    <GeneralApp route={"/habits"}>
      <p>Habits</p>
    </GeneralApp>
  );
}

export default Habits;