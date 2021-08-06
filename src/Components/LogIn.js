import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function LogInForm({setUserID, findProfile, setProfileID}) {

    let history = useHistory();

    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const useStyles = makeStyles((theme) => ({
        root: {
            backgroundImage: `url("https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500")`,
            minHeight: '100vh',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            paddingTop: '10rem',
            color: 'white',
        },
        colorText: {
            color:'#FCC4D6',
        },
        title: {
            fontSize: '3rem',
            color: '#fff'
        },
        button: {
            color:'#fff',
            backgroundColor: '#FCC4D6',
            fontSize: '1.5rem',
            margin: '1.5px',
            borderRadius: 3,
            borderColor: 'rgba(0,0,0,0.08)',
            borderWidth: 0.3,
        },
    }));
    const classes = useStyles()

    async function handleLogIn(e) {
        e.preventDefault();
        fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({email, password: password}),
        })
        .then((response) => response.json())
        .then((data) => setProfileID(data.user.id))
        .then(window.alert("Login successful"))
        .then(() => history.push('/profile'))
    }

    function handleSubmit(){
        history.push('/signup')
    }

    return (
        <div className={classes.root}>
            <h1 className={classes.title}>Log<span className={classes.colorText}>In</span></h1><br/>
            <form>
            <div className="mb-3" >
                <label>Email address</label>
                <br/>
                <input className="login-input" onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                <br/>
                <small className="text-muted">
                We'll never share your email with anyone else.
                </small>
            </div>

            <div className="mb-3" >
                <label>Password</label>
                <br/>
                <input className="login-input" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
            </div>
            <div className="mb-3">
                <input type="checkbox" label="Check me out" />
                <label>&nbsp;&nbsp;{"Check me out"}</label>
            </div>
            <button onClick={(e) => handleLogIn(e)} className={classes.button} variant="primary" type="submit">
                Submit
            </button>
            </form>
            <br/>
            <div class="separator">
            <div class="line"></div>
            <h5>OR</h5>
            <div class="line"></div>
            </div>
            <br/>
            <h6>Don't have an account?</h6>
            <button onClick={(e) => handleSubmit(e)} type="button" className={classes.button}>Sign Up</button>

        </div>
    )
}

export default LogInForm
