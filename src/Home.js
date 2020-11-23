import React from 'react'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import Button from "@material-ui/core/Button";
import styles from './Register/Register.module.css';
export default function Home({setLoginStatus}) {
    return (
        <div className ={styles.home_page}>
         <h3>Welcome to <h1> Okhati </h1></h3>
             <div style={{float:'right'}} > <Button onClick={()=>setLoginStatus(false)}><ExitToAppIcon/>logout</Button> </div>
             
        </div>
    )
}
