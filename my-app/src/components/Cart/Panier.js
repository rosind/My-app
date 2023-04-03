import {useState} from "react";


function MyCart({ cart, updateCart}) {
    const [isOpen, setIsOpen] = useState(true)
    /*const total = cart.reduce(
      (acc, carType) => acc + carType.amount * carType.price, 0
    )*/
    return (
    <div>
       <h4>Produits :</h4>
       
       <h4>Total :</h4> 
    </div> 
        
    )
}
export default MyCart