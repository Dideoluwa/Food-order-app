import React, { useState, useRef, useContext } from 'react'
// import Card from '../UI/Card';
import styles from './MealList.module.css'
import CartContext from './store/cart-context';

// import Meals from './Meals';

function MealList(props) {
    let ctx = useContext(CartContext)
    let [amount, setAmount] = useState('1')
    // let [meals , setMeals] = useState(DUMMY_MEALS)
    let [inputIsValid, setInputIsValid] = useState(true)
    let amountInputRef = useRef()


    const addToCartHandler = (amount) => {
        ctx.addItem({
            key: props.key,
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
        });
        // console.log(DUMMY_MEALS[0].name)
    }

    let amountFormHandler = (e) => {
        e.preventDefault()
        // let enteredAmount = setAmount(e.target.value)
        let enteredAmount = amountInputRef.current.value
        let enteredAmountNum = +enteredAmount

        if (enteredAmount.trim().length === 0 ||
            enteredAmountNum < 1 ||
            enteredAmountNum > 100
        ) {
            setInputIsValid(false);
            return;
        }

        addToCartHandler(enteredAmountNum)

        setAmount('1')
    }

    let amountChangeHandler = (e) => {
        setAmount(e.target.value)
    }
    return (
        <div className={styles.meals}>
            <div className={styles.list1}>
                <h3>{props.name}</h3>
                <div className={styles.wrapper}>
                    <img src={props.img} alt='Food-Img' />
                </div>
                <h3 className={styles.description}>Description: {props.description}</h3>
                <div className={styles.price}>Price:{`#${props.price}`}</div>
            </div>
            <div className={styles.list}>
                <form onSubmit={amountFormHandler}>
                        <label>Amount:</label>
                        <input
                            ref={amountInputRef}
                            id =  {props.id}
                            type='number'
                            min='1'
                            max='100'
                            step='1'
                            value={amount}
                            onChange={amountChangeHandler}
                        />
                    <button>+ Add to cart</button>
                    {!inputIsValid && <p>Enter a valid amount from 1-100.</p>}
                </form>
            </div>
        </div>
    )
}

export default MealList