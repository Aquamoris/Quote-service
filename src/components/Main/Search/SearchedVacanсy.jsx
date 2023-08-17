import React from "react";
import style from "./SearchedVacancy.module.css"
import {Link} from "react-router-dom";

const SearchedVacancy = (props) => {
    const vacancyPath = '/vacancy/' + props.id;
    const companyPath = '/company/' + props.company.id;

    return (
        <div className={style.wrapper}>
            <Link className={style.name + ' ' + style.test} to={vacancyPath}>
                {props.name}
            </Link>
            <div className={style.logo + ' ' + style.test}>
                <img src={props.company.logo} alt="logo"/>
            </div>
            <div className={style.salary + ' ' + style.test}>
                {props.salary}
            </div>
            <div className={style.companyInfo}>
                <Link to={companyPath} className={style.company + ' ' + style.test}>
                    {props.company.name}
                </Link>
                <div className={style.address + ' ' + style.test}>
                    {props.address}
                </div>
            </div>
            <div className={style.experience + ' ' + style.test}>
                {props.requiredExperience}
            </div>
            <button className={style.response + ' ' + style.test}>
                Откликнуться
            </button>
        </div>
    )
}

export default SearchedVacancy;