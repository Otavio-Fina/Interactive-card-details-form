import React from 'react';
import ReactDOM from 'react-dom/client';
import AtualizeCard from './atualizeCord';
import Validacao from './validation';

'use strict';

export default function App() {
    return (
        <>
            <AtualizeCard />
            <Validacao />
        </>
    );
}


const initialRootNode = document.getElementById('initial-root')
const root = ReactDOM.createRoot(initialRootNode);
root.render(React.createElement(App))
