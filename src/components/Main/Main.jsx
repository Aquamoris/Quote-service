import React from "react";
import Professions from "./Professions";
import Search from "./Search";
import WorkOnCompanies from "./WorkOnCompanies";
import WorksInMoscow from "./WorksInMoscow";

const Main = (props) => {
    return (
        <>
            <Search />
            <Professions professions={props.mainState.professions}/>
            <WorkOnCompanies companies={props.mainState.companies}/>
            <WorksInMoscow jobsMoscow={props.mainState.jobsMoscow}/>
        </>
    )
}

export default Main;