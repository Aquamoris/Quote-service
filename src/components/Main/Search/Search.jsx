import React from "react";
import style from "./Search.module.css"
import SearchedVacancy from "./SearchedVacanсy";

const Search = (props) => {
    const searchResult = props.searchState.result.map(v =>
            (<SearchedVacancy
                name={v.name}
                requiredExperience={v.requiredExperience}
                salary={v.salary}
            />)
        );

    const searchInput = React.createRef();
    let searchingVacancy = () => {
        props.searchingVacancy();
    }

    let searchInputChange = () => {
        let searchData = searchInput.current.value.toLowerCase();
        props.searchInputChange(searchData);
    }

    return (
        <div className={style.wrapper}>
            <img className={style.img}
                 src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/HeadHunter_logo.png/640px-HeadHunter_logo.png'
                 alt='logo'/>
            <input className={style.input}
                   type='text'
                   placeholder='Профессия, должность или компания'
                   autoComplete='false'
                   ref={searchInput}
                   onChange={searchInputChange}
            />
            <button className={style.searchButton} onClick={searchingVacancy}>
                <span className={style.search}>Найти работу</span>
            </button>
            <button>
                Фильтры
            </button>
            <a href='/'>Я ищу сотрудника</a>
            { searchResult }
        </div>
    )
}

export default Search;