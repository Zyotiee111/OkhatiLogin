import React from 'react'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import Button from "@material-ui/core/Button";
import styles from './Register/Register.module.css';
export default function Home({ setLoginStatus, loginStatus }) {
    const handleLogout = () => {
        setLoginStatus(false)
        localStorage.removeItem("loginStatus")
    }
    return (
        <div className ={styles.home_page}>
         <h3>Welcome to <h1> Okhati </h1></h3>
             <div style={{float:'right', marginRight: '10px'}} > 
                <Button variant="outlined" onClick={() => handleLogout()}><ExitToAppIcon/>logout</Button> 
             </div>
             
        </div>
    )
}
