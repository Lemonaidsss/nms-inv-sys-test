import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';



function Login()
{
    const [user, setUser]=useState("");
    const [password, setPassword]=useState("");
    const history = useHistory();

    useEffect(() => {
        if (localStorage.getItem('user-info')){
            history.push("/add")
        }
    }, [])
    return(
        <div>
            <h1>Login Bitch</h1>
            <div className="col -sm-6 offset-sm-3">
                <input type="text" placeholder="username"
                onChange={(e)=>setUser(e.target.value)}
                className="form-control"/>
            </div>
        </div>
    )
}

export default Login;