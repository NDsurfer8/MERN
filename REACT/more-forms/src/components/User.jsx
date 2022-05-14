
import React, { useState } from 'react';

const User = () => {

    // * SET INITIAL STATE
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [ConfirmPassword, setConfirmPassword] = useState('')

    // * SET VALIDATIONS
    const [firstNameError, setFirstNameError] = useState('')
    const [lastNameError, setLastNameError] = useState('')
    const [EmailError, setEmailError] = useState('')
    const [PasswordError, setPasswordError] = useState('')
    const [ConfirmPasswordError, setConfirmPasswordError] = useState('')

    // * HANDLERS FUNCTION FOR EVENT 
    const firstNameHandler = (e) => {
        setFirstName(e.target.value);
        if (firstName < 2) {
            setFirstNameError("First Name must be at least 2 Chars")
        }
        else {
            setFirstNameError('')
        }
    }

    const lastNameHandler = (e) => {
        setLastName(e.target.value);
        if (lastName < 2) {
            setLastNameError("last Name must be at least 2 Chars")
        }
        else {
            setLastNameError('')
        }
    }

    const EmailHandler = (e) => {
        setEmail(e.target.value);
        if (Email.length < 5) {
            setEmailError("Email must be at least 5 Chars")
        }
        else {
            setEmailError('')
        }
    }

    const ConfirmPasswordHandler = (e) => {
        setConfirmPassword(e.target.value);
        if ([Password] !== [ConfirmPassword]) {
            setConfirmPasswordError("Password must match")
        }
        else {
            setConfirmPasswordError('')
        }
    }

    // if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {


    //     if (input["password"] != input["confirm_password"]) {
    
    //       isValid = false;
    
    //       errors["password"] = "Passwords don't match.";
    
    //     }
    
    // }

    const PasswordHandler = (e) => {
        setPassword(e.target.value);
        if (Password.length < 8) {
            setPasswordError("Password must be at least 8 Chars")
        }
        else {
            setPasswordError('')
        }
    }









    // * END OF HANDLER FUNCTIONS FOR ALL FORM COMPONENTS

    // * FORM DATA TO BE DISPLAYED

    return (
        <div>
            <form onSubmit={""}>
                <div>
                    <label>First Name:</label>
                    <input type="text" onChange={firstNameHandler} />
                    <p>{firstNameError}</p>
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" onChange={lastNameHandler} />
                    <p>{lastNameError}</p>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" onChange={EmailHandler} />
                    <p>{EmailError}</p>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="text" onChange={PasswordHandler} />
                    <p>{PasswordError}</p>
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="text" onChange={ConfirmPasswordHandler} />
                    <p>{ConfirmPasswordError}</p>
                </div>
            </form>

        </div>
    )
}

export default User