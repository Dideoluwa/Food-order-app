import React, { useState, useEffect } from "react";
import Login from "./Components/Login";
import Header from "./Header";
import Cart from "./Components/Cart";
import Home from "./Components/Home";
import CartProvider from "./Components/store/CartProvider";


function App() {
  const [isLoggedin, setIsLoggedIn] = useState(false)
  let [cart, setCart] = useState()
  useEffect(() => {
    let userLoggedIn = localStorage.getItem('loggedIn')

    if (userLoggedIn === '1') {
      setIsLoggedIn(true)
    }
  }, [])

  let loggedInHandler = (email, password) => {
    localStorage.setItem('loggedIn', '1')
    setIsLoggedIn(true)
  }
  let loggedOutHandler = () => {
    localStorage.removeItem('loggedIn')
    setIsLoggedIn(false)
  }
  let openCartHandler = () => {
    setCart([])
  }
  let closeCartHandler = () => {
    setCart(null)
  }

  return (
    <CartProvider>
      <React.Fragment>
        {cart && <Cart close={closeCartHandler} />}
        <Header onAuthentication={isLoggedin} loggedOut={loggedOutHandler} openCart={openCartHandler} />
        <main>
          {!isLoggedin && <Login loggedIn={loggedInHandler} />}
          {isLoggedin && <Home />}
        </main>
      </React.Fragment>
    </CartProvider>
  );
}

export default App;
