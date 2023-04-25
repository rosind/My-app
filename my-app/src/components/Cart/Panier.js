import {useState, useEffect} from "react";

function MyCart({ cart, updateCart}) {
    const [isOpen, setIsOpen] = useState(true)
    //const total = cart.reduce(
     // (acc, carType) => acc + carType.amount * carType.price,
      //0
    //) 
    //useEffect(() => {
     // document.title = `LMJ: ${total}€ d'achats`
    //}, [total])

    return (
      <div>
        <ul>
          {
            cart.map({ name, price, amount}, index) => (
              <div>

              </div>
            )
          }
        </ul>
        
      </div>
    )
      
}
  
export default MyCart;