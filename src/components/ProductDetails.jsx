import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        console.log(product);
        getProduct();
    });

    const getProduct = () => {
        fetch(`http://localhost:3002/products/${id}`)
        .then((d) => d.json())
        .then((res) => {
            setProduct(res);
        })
    };

    const { name, price } = product;
    return(
        <div>
            <div>{name}</div>
            <div>{price}</div>
            <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
                Aldus PageMaker including versions of Lorem Ipsum.
            </div>
        </div>
    )
};