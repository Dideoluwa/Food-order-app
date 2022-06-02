import React, { useContext, } from 'react'
import Card from '../UI/Card'
import ReactDOM from 'react-dom'
import styles from './Cart.module.css'
import CartContext from './store/cart-context'

let Modal = (props) => {
    //    let [order , setOrder] = useState(false)
    let ctx = useContext(CartContext)
    let showOrder = ctx.items.length > 0
    let totalSpent = `#${ctx.totalAmount}`;
    const cartItemRemoveHandler = (id) => {
        ctx.removeItem(id);
    };
    const cartItemAddHandler = (item) => {
        ctx.addItem({ ...item, amount: 1 });
    };
    let orderHandler = () => {
        alert('Your order has been taken')
        // ctx.items.length = 0;
        // totalSpent = 0
    }

    return (
        <div className={styles.overlay}>
            <Card className={styles.cover}>
                <ul className={styles['cart-items']}>
                    {ctx.items.map((item) => (
                        <div className={styles.cartList}>
                            <div className={styles.cover1}>
                                <h2 className={styles.h2}>{item.name}</h2>
                                <div className={styles.quantity}>
                                    <li>{`#${item.price}`}</li>
                                    <div className={styles.amount}>X{item.amount}</div>
                                </div>
                            </div>
                            <div className={styles.button2}>
                                <button onClick={cartItemRemoveHandler.bind(null, item.id)}>-</button>
                                <button onClick={cartItemAddHandler.bind(null, item)}>+</button>
                            </div>
                        </div>
                    ))}
                </ul>
                <div className={styles.init}>
                    <h3>Total amount:</h3>
                    <h3>{totalSpent}</h3>
                </div>
                <div className={styles.button}>
                    <button onClick={props.close}>Close</button>
                    {showOrder &&<button onClick={orderHandler}>Order</button>}
                </div>
            </Card>
        </div>
    )
}

function Cart(props) {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Modal close={props.close} />, document.getElementById('modal'))}
        </React.Fragment>
    )
}

export default Cart