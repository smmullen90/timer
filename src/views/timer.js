import React, { Component } from "react"
import ReactDOM from "react-dom"
import { observer } from "mobx-react"

const TimerView = observer(({ timer }) => (
    <p>timer.remainingSeconds</p>
));

return TimerView;
