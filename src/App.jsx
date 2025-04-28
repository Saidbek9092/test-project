import './App.css'
import CounterList from './components/CounterList'
import {useState, useEffect, useLayoutEffect} from "react";

function App() {
 

    return (
        <div className="app">
            <CounterList/>
        </div>
    )
}

export default App