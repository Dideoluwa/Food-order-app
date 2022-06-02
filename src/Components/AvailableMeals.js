import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealList from './MealList';
import styles from './AvailableMeals.module.css'

const DUMMY_MEALS = [
  {
    id: '1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 1000,
    img: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3VzaGl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: '2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 7755,
    img: 'https://images.unsplash.com/photo-1585325701956-60dd9c8553bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nobml0emVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: '3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 6105,
    img: 'https://images.unsplash.com/photo-1565060299509-453c4f3bc905?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmFyYmVjdWUlMjBidXJnZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: '4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 8925,
    img: 'https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealList
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      img = {meal.img}
    >
      <div className={styles.wrapper}>
        <img src={meal.img} alt='Food-images' />
      </div>
    </MealList>
  ));

  return (
   
      <Card className={classes.meals}>
        <ul>
        <li>{mealsList}</li></ul>
      </Card>
   
  );
};

export default AvailableMeals;