import './App.css';
import Header from './components/Header/Header'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./components/Main/Main";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header headerState={props.state.header}></Header>
                <Routes>
                    <Route path='/' element={<Main mainState={props.state.main} />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
