import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Butter Chicken',
    description: 'Finest chicken and spices',
    price: 500.00,
  },
  {
    id: 'm2',
    name: 'Veg Manchurian',
    description: 'Fresh veggies with Gravy',
    price: 150.15,
  },
  {
    id: 'm3',
    name: 'Paneer Malai Tikka',
    description: 'Rosted Milk product with white sauce',
    price: 199.99,
  },
  {
    id: 'm4',
    name: 'Tandoori Afgani Tangdi',
    description: 'Healthy...and green...',
    price: 224.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) =>
  (<MealItem
    key={meal.id}
    name={meal.name}
    description={meal.description}
    price={meal.price} 
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;