import {NavLink} from "react-router-dom";

const HeaderLink = (props) => {
    return (
            <NavLink to={props.to}>{props.name}</NavLink>
    );
}

export default HeaderLink;