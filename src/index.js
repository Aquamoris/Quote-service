import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import state from './redux/state'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderTree = () => {
    root.render(
        <React.StrictMode>
            <App state={state.getState()}
                 searchInputChange={state.searchInputChange.bind(state)}
                 searchingVacancy={state.searchingVacancy.bind(state)}/>
        </React.StrictMode>
    );
}

rerenderTree(state.getState());

state.subscribe(rerenderTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
