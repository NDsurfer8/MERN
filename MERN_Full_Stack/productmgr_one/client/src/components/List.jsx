import React from 'react'
import { Link } from 'react-router-dom'
export default props => {


//displaying list of products created
    return(
        <div>
            <h1>All Products</h1>
            {props.product.map((product, index)=>{
                return  <Link to = {"/product/"+product._id}>{product.title}   </Link>
            })}
        </div>
    )
}

