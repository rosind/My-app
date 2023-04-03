import React from "react";
import ProductItem from "./ProductItem";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CardGroup from 'react-bootstrap/CardGroup';
import classes from "./Product.module.css";
import axios from 'axios';
import carList from "../../datas/carList";



export const Product = () => {
  const productjsx = carList.map((item) => (
    <ProductItem
      key={item._id}
      name={item.name}
      images={item.images}
      price={item.price}
    />
  ));
  console.log(productjsx);
  return (
    <section className={classes.product}>
      <Row xs={1} md={2} className="g-4">
        {productjsx}
      </Row>
    </section>
  );
};
export default Product;



