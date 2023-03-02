import React from 'react';
import ReactDOM from 'react-dom';


export default function App() {
    return <atualizeCarde />
}

function Ali() {
    document.getElementsByClassName('btn').style.color = 'red'
}

const initialRootNode = document.getElementById('initial-root')
const root = ReactDOM.createRoot(initialRootNode);
root.render(React.createElement(App))
root.render(React.createElement(Ali))