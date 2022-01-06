import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import { UserDetail } from "./UserDetails";

export const Users = () => {
    
    return(
        <div>
            {[1, 2, 3, 4].map((e) => (
                <div style={{margin:'10px'}}>
                    <Link to={`/user/${e}`}> User {e} </Link>
                </div>
            ))}
        </div>
    )
};