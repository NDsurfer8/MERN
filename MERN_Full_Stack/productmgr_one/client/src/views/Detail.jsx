import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
const Detail = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);
    

    return (
        <div>
            
            <h3>Title: {product.title}</h3>
            <h3>Price: {product.price}</h3>
            <h3>Description: {product.description}</h3>
            
        </div>
        
    )
    // <Link to ="/product">Home</Link>
}

export default Detail;