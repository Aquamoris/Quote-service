import './App.css';
import Header from './components/Header/Header'
import {BrowserRouter, Routes} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header headerState={props.state.header}></Header>
                <Routes>

                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
