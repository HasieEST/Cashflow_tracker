import React from "react";
import Card from "../UI/Card";
import classes from './Login.module.css';
import Button from "../UI/Button";
import { useState } from "react";
import { useReducer } from "react";
import { useEffect } from "react";

const emailReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return {
            value: action.val,
            isValid: action.val.includes('@')
        }
    }
    if (action.type === 'INPUT_BLUR') {
        return {
            value: state.value,
            isValid: state.value.includes('@')
        }
    }
    return ({
        value: '',
        isValid: false
    })
}

const passwordReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return {
            value: action.val,
            isValid: action.val.trim().length > 6
        }
    }
    if (action.type === 'INPUT_BLUR') {
        return {
            value: state.value,
            isValid: state.value.trim().length > 6
        }
    }
    return ({
        value: '',
        isValid: false
    })
}

const Login = (props) => {
    const [validCredentials, setValidCredentials] = useState(false)

    const [validEmail, setValidEmail] = useReducer(emailReducer, {
        value: '',
        isValid: null
    })

    const [validPassword, setValidPassword] = useReducer(passwordReducer, {
        value: '',
        isValid: null
    })

    useEffect(() => {
        const timeoutIdentifier = setTimeout(() => {
            setValidCredentials(
                validEmail.isValid && validPassword.isValid
            )
        }, 500);
        return () => {
            clearTimeout(timeoutIdentifier)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [validEmail.value, validPassword.value])

    useEffect(() => {
        console.log('Effect is running')
        return () => {
            console.log('Effect cleanup')
        }
    }, [])

    const emailChangeHandler = (event) => {
        setValidEmail({ type: 'USER_INPUT', val: event.target.value })
        setValidCredentials(validEmail.isValid && validPassword.isValid)
    }

    const passwordChangeHandler = (event) => {
        setValidPassword({ type: 'USER_INPUT', val: event.target.value })
        setValidCredentials(validEmail.isValid && validPassword.isValid)
    }

    const emailBlurHandler = () => {
        setValidEmail({ type: 'INPUT_BLUR' })
    }

    const passwordBlurHandler = () => {
        setValidPassword({ type: 'INPUT_BLUR' })
    }

    const submitHandler = (event) => {
        event.preventDefault()
        props.onLogin(validEmail.value, validPassword.value)
    }

    return (
        <Card className="Login">
            <form onSubmit={submitHandler}>
                <div className={`${classes.control} ${validEmail.isValid === false ? classes.invalid:''}`}>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" value={validEmail.value} onChange={emailChangeHandler} onBlur={emailBlurHandler}></input>
                </div>
                <div className={`${classes.control} ${validPassword=== false ? classes.invalid:''}`}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={validPassword.value} onChange={passwordChangeHandler} onBlur={passwordBlurHandler}></input>
                </div>
                <div className={classes.actions}>
                    <Button type="submit" disabled={!validCredentials}>Login</Button>
                </div>
            </form>
        </Card>
    )
}

export default Login