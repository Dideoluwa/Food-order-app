import React from 'react'
import Image2 from '../Images/meals.jpeg'
import AvailableMeals from './AvailableMeals'
import styles from './Home.module.css'
import MealInfo from './MealInfo'
// import MealList from './MealList'
// import Meals from './Meals'

function Home(props) {
  return (
    <div>
      <div className={styles.img}>
        <img src={Image2} alt='Food' />
      </div>
      <MealInfo />
      <AvailableMeals />
    </div>
  )
}

export default Home
