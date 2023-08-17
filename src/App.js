import './App.css';
import Header from './components/Header/Header'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./components/Main/Main";
import Vacancies from "./components/Vacancies/Vacancies";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header headerState={props.state.header}></Header>
                <Routes>
                    <Route path='/' element={<Main
                        mainState={props.state.main}
                        searchInputChange={props.searchInputChange}
                        searchingVacancy={props.searchingVacancy}/>}>
                    </Route>
                    <Route path='/vacancy' element={<Vacancies
                    allVacancies={props.state.vacancies}/>}>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
