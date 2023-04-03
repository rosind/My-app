import React from 'react'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import {carList} from '../../datas/carList';


/*
function addToCart(props){
  const currentPlantSaved = cart.find(())
}*/
const addCart = () => {
  
    alert('Envoie vers le panier')
  
}
const ajout = () => {
  alert(`ajout de à bien été effectuer`)
  
}
export const ProductItemForm = ({ cart, updateCart}) => {
  const [activeCotegory, setACtiveCotegory] = useState('')
  const categories = carList.reduce(
    (acc, car) => 
    acc.includes(car.category) ? acc : acc.concat(car.category),
    []
  )

  function addToCart(name, price) {
    const currentCarSaved = carList.find((car) => car.name === name)
    if (currentCarSaved){
      const cartFilteredCurrentCar = carList.filter(
        (car) => car.name !== name 
      )
      updateCart([
        ...cartFilteredCurrentCar,
        {name, price, amount: currentCarSaved.amount + 1 }
      ])
    } else {
      updateCart([...cart, { name, price, amount: 1  }])
    }
  }

  return (
    <form>
        <input />

        <Button onClick={() => addToCart()}>Add</Button>{' '}
    </form>
  )
}
export default ProductItemForm;
