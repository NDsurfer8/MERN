import React, { useState } from 'react';

const Hooked = () => {
    // we need to use state to store alerts etc..
    // whatever is passed into the useState("")is your initial state
    // *   Initial State  Initial State
    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    // *    VALIDATIONS
    const [firstNameError, setFirstNameError] = useState("")


//* handler sets state and displays all logic for validations etc...
    const firstNameHandler = (e) => {
        setfirstName(e.target.value);
        if(firstName < 2){
            setFirstNameError("First Name must be atlest 2 Chars")
        }
        else{
            setFirstNameError('')
        }
    }

    const lastNameHandler = (e) => {
        setlastName(e.target.value)
    }
    const emailHandler = (e) => {
        setEmail(e.target.value)
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }
    const confirmPasswordHandler = (e) => {
        setconfirmPassword(e.target.value)
    }


    // *  Anything you want to be show on screen put into return statement below
    return (
        <div>
            <form >
                <div>
                    <label>First Name: </label>
                    <input
                        onChange={firstNameHandler} //*calling  const firstNameHandler 
                        type="text"
                        name="firstName"
                    />
                    {firstNameError}
                </div>
                <div>
                    <label>Last Name: </label>
                    <input 
                        onChange ={lastNameHandler}
                        type="text" />
                </div>
                <div>
                    <label>Email Address: </label>
                    <input 
                        onChange={emailHandler}
                        type="text"  />
                </div>
                <div>
                    <label>Password: </label>
                    <input 
                    onChange={passwordHandler}
                    type="text"  />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input 
                    onChange={confirmPasswordHandler}
                    type="text" />
                </div>
                <input type="submit" value="Create User" />
            </form>
            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{email}</p>
            <p>{password}</p>
            <p>{confirmPassword}</p>
            
        </div>
    )
}
export default Hooked