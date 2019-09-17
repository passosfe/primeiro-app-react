// Import React and ReactDOM libraries
import React from 'react'
import ReactDOM from 'react-dom'

//Create a React Component
const App = () => {
    return <div>Ola</div>;
}


//take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)