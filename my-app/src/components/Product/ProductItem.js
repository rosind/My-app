import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ProductItemForm from './ProductItemForm'

function handleClick(carName){
  alert(`Description du produit ${carName}: une voiture à 4 roues`)
}

const ProductItem = (props) => {
  return (
    <Col>
    <Card onClick={() => handleClick(props)} >
        <Card.Img variant="top" src={props.images} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            <p>Faut il vraiment que je t'explique c'est quoi une Pontiac connard</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{props.price}</small>
          <ProductItemForm />
        </Card.Footer>
      </Card>
      </Col>
  )
}

export default ProductItem