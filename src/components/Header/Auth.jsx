import {Link} from "react-router-dom";

const AuthLink = (props) => {
    return (
        <button>
            <Link to={props.to}>{props.name}</Link>
        </button>
    );
}

export default AuthLink;