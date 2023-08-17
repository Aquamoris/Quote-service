import React from "react";
import SearchedVacancy from "../Main/Search/SearchedVacanсy";
import styled from "styled-components";

const AllVacancies = styled.div`
    width: 700px;
    margin: 0 auto;
`

const Vacancies = (props) => {
    const allVacancies = props.allVacancies.map(v =>
        (<SearchedVacancy
            name={v.name}
            requiredExperience={v.requiredExperience}
            salary={v.salary}
            id={v.id}
            address={v.address}
            company={v.company}
        />)
    );

    return (
        <>
            <AllVacancies>
                { allVacancies }
            </AllVacancies>
        </>
    );
}

export default Vacancies;