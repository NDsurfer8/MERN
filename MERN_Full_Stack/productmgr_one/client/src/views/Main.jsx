import axios from 'axios';
import React, { useEffect, useState } from 'react';
import List from '../components/List';
import Product from '../components/Product';

export default () => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
// if getting all have the original state be an array of objects
    useEffect(()=>{
        axios.get('http://localhost:8000/api/product')
        .then(res=>setProduct(res.data))
        .catch(err=>console.log('error:', err))

    }, [loaded])
                                                // if that variable  will cause use effect to change
                                                //function to flip loaded trigged by submit handler
    const effectFlip = () =>{
        setLoaded(!loaded)
        
        
        // loaded 
        // ? setLoaded(false)
        // : setLoaded(true);
    }

    return(
        <div className="App">
            <Product effectFlip={effectFlip} loaded={loaded} setLoaded={setLoaded}/>
            <List product = {product} />
        </div>
    )
}





    // useEffect(()=>{
    //     axios.get('http://localhost:8000/api/product/:id')
    //     .then(res=>setProduct(res.data))
    //     .catch(err=>console.log('error:', err))

    // }, [])