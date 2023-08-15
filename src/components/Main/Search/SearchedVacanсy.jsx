import React from "react";

const SearchedVacancy = (props) => {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.requiredExperience}</p>
            <p>{props.salary}</p>
        </div>
    )
}

export default SearchedVacancy;