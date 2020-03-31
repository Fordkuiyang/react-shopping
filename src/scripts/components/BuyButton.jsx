import React from "react";
import { Button, Whilte } from "react-bootstrap";
const BuyButton = ({ addProductToCart }) => {
  return (
    <div>
      <Button variant="primary" size="sm" onClick={addProductToCart}>
        收藏
      </Button>
      {' '}
      <Button variant="warning" size="sm" onClick={addProductToCart}>
        加入购物车
      </Button>
    </div>
  );
};
export default BuyButton;
