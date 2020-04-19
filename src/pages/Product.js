import React from "react";
import Counter from "./components/Counter";
import { connect } from "react-redux";

const Product = (props) => {
  return (
    <div>
      <h1>Halaman Product</h1>
      <h3>Total jumlah barang : {props.cart}</h3>
      <Counter />
    </div>
  );
};

const mapStateToProps = ({ cart }) => {
  return {
    cart: cart,
  };
};

export default connect(mapStateToProps, null)(Product);
