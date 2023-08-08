import React from "react";

const Search = () => {
    return (
        <>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/HeadHunter_logo.png/640px-HeadHunter_logo.png' alt='logo' />
            <input type='text' value='Профессия, должность или компания' />
            <button>Найти работу</button>
            <button>Фильтры</button>
            <a href='/'>Я ищу сотрудника</a>
            <p>63 891 058 резюме</p>
            <p>1 426 302 вакансии</p>
            <p>2 004 901 копмания</p>
        </>
    )
}

export default Search;