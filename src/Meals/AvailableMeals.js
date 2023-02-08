import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Butter Chicken',
    description: 'Buttery Rosted Chicken with Gravy',
    price: 222.99,
  },
  {
    id: 'm2',
    name: 'Paneer Lababdar',
    description: 'Milk product with Spiecal gravy',
    price: 164.5,
  },
  {
    id: 'm3',
    name: 'Paneer Tikka',
    description: 'Roasted Paneer with Veggies',
    price: 128.99,
  },
  {
    id: 'm4',
    name: 'Tandoori Afgani Tangdi',
    description: 'Roasted with spices',
    price: 185.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
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