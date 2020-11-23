import React, { useState } from 'react'
import styles from './Login.module.css';
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import Button from "@material-ui/core/Button";
import EmailIcon from '@material-ui/icons/Email';
import { Link } from 'react-router-dom';

export default function Login({users, setLoginStatus}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false)
   

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === "" || password === ""){
            alert("Please register first!")
            return;
        }else{
            for(let i=0; i<users.length; i++){
                if(users[i].email === email && users[i].password === password){
                    setLoginStatus(true)
                    localStorage.setItem("loginStatus", "true")
                }else{
                    setError(true)
                }
            }
            setError(true)
        }
    }

    return (
        <div className ={styles.login_page}>
             <h1> Okhati </h1>
            <div className={styles.container}>
                <h1> Login </h1>
            <form  onSubmit={(e) => handleSubmit(e)}>
                {/* email */}
                <div className={styles.login_input}>
                < EmailIcon />
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                </div>

                {/* password */}
                <div className= {styles.login_input}>
                <VpnKeyIcon />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div className={styles.login_button}>
                <Button display="flex" type="submit">
                    Login
                </Button>
                </div>
            </form>
            { error && <p style ={{color:"red"}}> Invalid email or password </p>}
            <div className={styles.buttom}>
                <p>New User?</p>
                <Link to="/register"><p style={{color: "#009653"}}>Sign Up</p></Link>
            </div>
               
        </div>
          
            
            
        </div>
        
    )
}
