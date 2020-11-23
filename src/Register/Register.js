import React, {useState} from 'react'
import styles from './Register.module.css';
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import Button from "@material-ui/core/Button";
import EmailIcon from '@material-ui/icons/Email';
import {Link } from 'react-router-dom';


export default function Register(props) {
   
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [email_error, setEmail_error] = useState(false)
    const [password_error, setPassword_error] = useState(false)

    const submitHandler =(e) =>{
        e.preventDefault();
        
        var email_check = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var password_check = /(?=.*\d)(?=.*[A-Za-z]).{8,}/;

        if(email.match(email_check) && email!== ""){
            setEmail_error(false)
        }else{
            setEmail_error(true)
            }
    
        if  ((password !== "" && confirmPassword !== "") 
            && (password.match(password_check))
            &&(password === confirmPassword)){
                let newUser = {
                    email,
                    password
                }
                let newArray = props.users
                newArray.push(newUser)
                props.setUsers(newArray)
                setEmail("")
                setPassword("")
                setConfirmPassword("")
                alert("Successfully registered")
                props.history.push("/")
            } else {
                setPassword_error(true)
            }
        }
        
    

    return (
        <div className ={styles.register_page}>
            <div >
             <h1> Okhati </h1>
             </div>
             <div className={styles.main_container} >
            <div className={styles.container}>
                <h1> Register</h1>
            <form onSubmit={(e) => submitHandler(e)} className ={styles.form}>
                {/* email */}
                <div className={styles.register_input}>
                < EmailIcon />
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required/>
                </div>
               

                {/* password */}
                <div className= {styles.register_input}>
                <VpnKeyIcon />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    minlength="8"
                    required/>
                </div>
        
                 {/* confirm password */}
                <div className={styles.register_input}>
                <VpnKeyIcon />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    minlength="8"
                    required/>
                </div>
               
               <div className={styles.register_button}>
                <Button display="flex" type="submit">
                    Register
                </Button>
                </div>
                <div className= {styles.error}>
                {email_error && (
                    <p className={styles.alert}> Invalid Email</p> 
                  )}
                {password_error && (
                    <p className={styles.alert}> Invalid Password- Must contain letter and alphabets </p> 
                  )}
                </div>
                 
               
            </form>

                <div className={styles.buttom}>
                    <p>Already a member?</p>
                        <Link to="/" style={{textDecoration:"none"}}>
                            <p style={{color: "#009653"}}>Sign In</p>
                        </Link>
                </div>
               
            </div>
          
        </div>  
            
        </div>
        
    )
}
