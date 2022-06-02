import React from 'react'
import Navigation from './Components/Navigation'
import styles from './Header.module.css'

function Header(props) {
  return (
    <div className={styles.cover}>
    <div>
        <h3 className={styles.h3}>Foodify</h3>
    </div>
    <Navigation isLoggedin = {props.onAuthentication} loggedOut = {props.loggedOut} open ={props.openCart}/>
    </div>
  )
}

export default Header