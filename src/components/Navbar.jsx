import { Link } from "react-router-dom";

export const Navbar = () => {
    return(
        <div>
            <Link to="/" style={{margin:'10px'}}>Home</Link>
            <Link to="/products" style={{margin:'10px'}}>Products</Link>
        </div>
    )
};