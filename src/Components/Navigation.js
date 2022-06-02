import React, { useContext, useState, useEffect } from 'react'
import Button from '../UI/Button'
import styles from './Navigation.module.css'
import CartIcon from './CartIcon'
import CartContext from './store/cart-context'

function Navigation(props) {
    let [isClicked, setIsClicked] = useState(false)
    let ctx = useContext(CartContext)
    let numOfCartItems = ctx.items.reduce((currentNum, item) => {
        return currentNum + item.amount
    }, 0);
    let { items } = ctx
    let bump = `${styles.cartIcon} ${isClicked ? styles.bump : ''}`
    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setIsClicked(true)
      let time =  setTimeout(()=>{
            setIsClicked(false)
        } , 300)
        return ()=>{
            clearTimeout(time)
        }
    }, [items])

    return (
        <div className={styles.nav}>
            {props.isLoggedin &&
                <div className={bump}
                    onClick={props.open}>
                    <span className={styles.icon}>
                        <CartIcon />
                    </span>
                    <span className={styles.cart}>
                        <button>
                            Your Cart
                        </button>
                    </span>
                    <span>
                        <div className={styles.badge}>
                            {numOfCartItems}
                        </div>
                    </span>
                </div>}
            {props.isLoggedin &&
                <Button
                    onClick={props.loggedOut}>
                    Logout
                </Button>}
        </div>
    )
}

export default Navigation