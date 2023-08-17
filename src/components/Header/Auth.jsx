import {Link} from "react-router-dom";
import style from "./Header.module.css"

const AuthLink = (props) => {
    return (
        <button className={style.authButton}>
            <Link to={props.to}>{props.name}</Link>
        </button>
    );
}

export default AuthLink;