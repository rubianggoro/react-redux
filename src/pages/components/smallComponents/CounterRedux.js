import React from "react";
import { connect } from "react-redux";
import { addCart, minCart } from "../../../Actions/CounterActions";

const CounterRedux = (props) => {
  return (
    <div>
      <h1>Components Using Redux</h1>
      <h3>Jumlah Barang : {props.cart}</h3>
      <button
        onClick={() => {
          props.addCart();
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          props.minCart();
        }}
      >
        -
      </button>
    </div>
  );
};

const mapStateToProps = ({ cart }) => {
  return {
    cart: cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCart: () => dispatch(addCart()),
    minCart: () => dispatch(minCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterRedux);
