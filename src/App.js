import React from 'react';
import { observer } from "mobx-react"

import './App.css';
import Timer from './views/timer';
import Button from './views/button';
import Link from './views/link';

const App = observer(({ timer }) => (
  <div className="App">
    <header className="App-header">
      <p>{timer.currentSlotName}</p>
      <Timer seconds={timer.remainingSeconds} />
      {!timer.isOn ?
        <Button onClick={timer.start}>
          Start
        </Button> :
        <Button onClick={timer.stop}>
          Pause
        </Button>
      }
      <Link onClick={timer.reset}>
        Reset
      </Link>
    </header>
  </div>
))

export default App;
