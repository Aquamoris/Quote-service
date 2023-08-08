import React from 'react';
import style from './Header.module.css'
import HeaderLink from './HeaderLink'
import AuthLink from "./Auth";

const Header = (props) => {
    const navBarLinks = props.headerState.links.map( l =>
        (<HeaderLink to={l.url} name={l.name}/> )
    );

    const authenticationLinks = props.headerState.authentication.map( b =>
        <AuthLink to={b.url} name={b.name} />
    );

    return (
        <header className={style.header}>
            { navBarLinks }
            { authenticationLinks }
        </header>
    );
}

export default Header;