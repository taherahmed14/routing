import { useParams } from "react-router-dom"

export const UserDetail = () => {
    const { userid } = useParams();

    return(
        <div>
            <div>User {userid}</div>
        </div>
    )
};