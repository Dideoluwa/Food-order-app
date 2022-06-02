import React, { useState, useReducer } from 'react'
import styles from './Login.module.css'
import Background from '../Images/image1.jpg'

let emailReducer = (state, action) => {
    if (action.type === 'emailInput') {
        return { value: action.val, isValid: action.val.includes('@') }
    }
    if (action.type === 'inputBlur') {
        return { value: state.value, isValid: state.value.includes('@') }
    }
    return { value: '', isValid: false }
}

let passwordReducer = (state, action) => {
    if (action.type === 'passwordInput') {
        return { value: action.val, isValid: action.val.trim().length >= 6 }
    }
    if (action.type === 'inputBlur') {
        return { value: state.value, isValid: state.value.trim().length >= 6 }
    }
    return { value: '', isValid: false }
}

export default function Login(props) {
    const [formIsValid, setFormIsValid] = useState(false);
    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: '',
        isValid: null
    })
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: '',
        isValid: null
    })

    let emailHandler = (e) => {
        dispatchEmail({
            type: 'emailInput',
            val: e.target.value
        })
        setFormIsValid(
            e.target.value.includes('@') && passwordState.isValid
        );
    }

    let formHandler = (e) => {
        e.preventDefault()
        props.loggedIn(emailState.value, passwordState.value)
        // console.log('okay')
    }

    let validateEmailHandler = () => {
        dispatchEmail({ type: 'inputBlur' })
    }

    let passwordHandler = (e) => {
        dispatchPassword({
            type: 'passwordInput',
            val: e.target.value
        })
        setFormIsValid(
            emailState.isValid && e.target.value.trim().length >= 6
        );
    }

    let validatePasswordHandler = () => {
        dispatchPassword({ type: 'inputBlur' })
    }


    return (
        <div
        className={styles.back}
            style={{
                backgroundImage: `url(${Background}`,
                backgroundRepeat: "no-repeat",
                backgroundSize: 'cover'
            }}>
            <div className={styles.cover}>
            <h5>Enter any Email and password(Does not need to be a valid Email nor password)</h5>
            <h1 className={styles.h1}>Sign in to Foodify</h1>
                <form onSubmit={formHandler}>
                    <div className={`${styles.control} ${emailState.isValid === false ? styles.invalid : ''}`}>
                        <label htmlFor='email'>Email:</label>
                        <input
                        type= 'email'
                            label='Email'
                            id='email'
                            value={emailState.value}
                            placeholder='johndoe@email.com'
                            onChange={emailHandler}
                            onBlur={validateEmailHandler}
                        />
                    </div>
                    <div className={`${styles.control} ${passwordState.isValid === false ? styles.invalid : ''}`}>
                        <label htmlFor='Password'>Password:</label>
                        <input
                        type='password'
                            label='Password'
                            id='password'
                            placeholder='Must be 6 letters or greater...'
                            value={passwordState.value}
                            onChange={passwordHandler}
                            onBlur={validatePasswordHandler}
                        />
                    </div>
                    <button className={styles.button} type='submit' disabled={!formIsValid}>Login</button>
                </form>
            </div>
        </div>
    )
}
