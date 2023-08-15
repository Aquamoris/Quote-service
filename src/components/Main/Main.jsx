import React from "react";
import Professions from "./Professions";
import Search from "./Search/Search";
import WorkOnCompanies from "./WorkOnCompanies";
import WorksInMoscow from "./WorksInMoscow";
import './Main.module.css';

const Main = (props) => {
    return (
        <>
            <Search searchState={props.mainState.search}
                    searchInputChange={props.searchInputChange}
                    searchingVacancy={props.searchingVacancy}/>
            <Professions professions={props.mainState.professions}/>
            <WorkOnCompanies companies={props.mainState.companies}/>
            <WorksInMoscow jobsMoscow={props.mainState.jobsMoscow}/>
        </>
    )
}

export default Main;