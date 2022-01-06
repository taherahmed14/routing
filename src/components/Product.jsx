import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log(products);
        getProducts();
    }, []);

    const getProducts = () => {
        fetch("http://localhost:3002/products")
        .then((d) => d.json())
        .then((res) => {
            setProducts(res);
            console.log(products);
        })
    };

    return (
        <div>
            <h1>Product Page</h1>

            {products.map(({ name, price, id }) => (
                <div style={{width:"100px", border: "1px solid white", boxShadow: "0 0 10px gray", margin:"auto", marginBottom:"10px"}}>
                    <div>{name}</div>
                    <div>{price}</div>
                    <Link to={`/products/${id}`}>More details</Link>
                </div>
            ))}
        </div>
    )
}