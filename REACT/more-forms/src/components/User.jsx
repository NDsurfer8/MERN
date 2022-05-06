
import React, {useState} from 'react';

const User = () => {

    // * SET STATE
    const [firstName,setFirstName] = useState('')
    const [lastName,setlastName] = useState('')
    const [Email,setEmail] = useState('')
    const [Password,setPassword] = useState('')
    const [ConfirmPassword,setConfirmPassword] = useState('')

    // * SET VALIDATIONS
    const [firstNameError,setFirstNameError] = useState('')
    const [lastNameError,setlastNameError] = useState('')
    const [EmailError,setEmailError] = useState('')
    const [PasswordError,setPasswordError] = useState('')
    const [ConfirmPasswordError,setConfirmPasswordError] = useState('')

    // * HANDLER FUNCTION FOR EVENT 
    const firstNameHandler = (e) =>{
        setFirstName(e.target.value);
        if(firstName < 2){
            setFirstNameError("First Name must be atlest 2 Chars")
        }
        else{
            setFirstNameError('')
        }
    }

    const lastNameHandler = (e) =>{
        setlastName(e.target.value);
        if(lastName < 2){
            setlastNameError("last Name must be atlest 2 Chars")
        }
        else{
            setlastNameError('')
        }
    }

    const EmailHandler = (e) =>{
        setEmail(e.target.value);
        if(Email.length < 5){
            setEmailError("Email must be atlest 5 Chars")
        }
        else{
            setEmailError('')
        }
    }

    const PasswordHandler = (e) =>{
        setPassword(e.target.value);
        if(Password.length < 8){
            setPasswordError("Password must be atlest 8 Chars")
        }
        else{
            setPasswordError('')
        }
    }

    const ConfirmPasswordHandler = (e) =>{
        setConfirmPassword(e.target.value);
        if(ConfirmPassword.length < 8){
            setConfirmPasswordError("Password must be atlest 8 Chars")
        }
        else{
            setConfirmPasswordError('')
        }
    }
    // * END OF HANDLER FUNCTIONS FOR ALL FORM COMPONENTS




    // * FORM DATA TO BE DISPLAYED

    return (
        <div>
            <form onSubmit={""}>
                <div>
                    <label>First Name:</label>
                    <input type="text" onChange={firstNameHandler}/>
                    <p>{firstNameError}</p>
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" onChange={lastNameHandler}/>
                    <p>{lastNameError}</p>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" onChange={EmailHandler}/>
                    <p>{EmailError}</p>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="text" onChange={PasswordHandler}/>
                    <p>{PasswordError}</p>
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="text" onChange={ConfirmPasswordHandler}/>
                    <p>{ConfirmPasswordError}</p>
                </div>
            </form>

        </div>
    )
}

export default User