// Import React and ReactDOM libraries
import React from 'react'
import ReactDOM from 'react-dom'

function getButtonText() {
    return 'Me Clique'
}

//Create a React Component
const App = () => {
    const label = 'Digite seu nome:'
    return (
        <div>
            <label className="label" htmlFor="name">
                {label}
            </label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>
                {getButtonText()}
            </button>
        </div>
    );
}


//take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)