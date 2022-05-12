import React,{useState} from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const SearchForm = () => {
//*setting state for the dropdown select form...category
//?keeping track of the id attached to the category
    const [category,setCategory]=useState('people');
    const [id,setid]=useState('');
    //?
    const navigate = useNavigate();

    // const params = useParams()
    
    const submitHandler = e =>{
        e.preventDefault()
        navigate(`${category}/${id}`)
    }



    return (
        <div>
        <form onSubmit={submitHandler}>
                
                <label>search for:</label>
                {/* select forms require onchange. */}
                {/* Select must always have a value as well */}
                <select onChange={ e =>setCategory(e.target.value)} name='category'>
                <option value="people">people</option>
                <option value="planets">planet</option>
                </select>
                <label>id:</label>
                {/* must provide name id to keep track */}
                <input onChange={ e => setid(e.target.value)} type='number' name='id'/>
                <button>search</button>
                
        </form>
        {/* allows to display child in app.js */}
        <Outlet/>
        </div>
    )
}

export default SearchForm