import React from 'react'
import ReactDOM from 'react-dom'
// import home from './components/home'

const home = () => {
    console.log('i am learning this react cby force')
    return ( <
        div >
        <
        p > Thi is home < /p> < /
        div >
    )
}
const App = () => {
    const now = new Date()
    const a = 10
    const b = 20
    console.log(now)
    return ( <
        div >
        <
        p > Hello world, it is { now.toString() } < /p> <
        p > { a }
        plus { b }
        is { a + b } <
        /p>   < /
        div >
        <
        home / >



    )
}
ReactDOM.render( < App / > , document.getElementById('root'))