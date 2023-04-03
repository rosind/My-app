import {useState} from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import MyCart from "./Panier";

export const Cart = (props) => {
  
    const [show, setShow] = useState(false);
  const cartTab = [
    {
      _id: "611f6385628e64b6ff96393c",
      name: "Pontiac",
      price: "13980,58",
      amount: 2,
    },
  ];
  const cartItems = (
    <ul>
      {cartTab.map((item) => {
        <li key={item._id}>{item.name}</li>;
      })}
    </ul>
  );

  return (
    <Modal
    show={true}
    onHide={undefined}
    backdrop="static"
    keyboard={false}
  >
    <Modal.Header closeButton>
      <Modal.Title>Cart</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <MyCart />
      {cartItems}
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={props.onClose}>Close</Button>
      <Button variant="primary">Order</Button>
    </Modal.Footer>
  </Modal>
  );
};
export default Cart;
