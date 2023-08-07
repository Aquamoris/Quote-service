import React from 'react';
import style from './Header.module.css'
import HeaderLink from './HeaderLink'

const Header = (props) => {
    let navBarLinks = props.headerState.links.map( l =>
        (<HeaderLink to={l.url} name={l.name}/> ) );

    return (
        <header className={style.header}>
            { navBarLinks }
        </header>
    );
}

export default Header;