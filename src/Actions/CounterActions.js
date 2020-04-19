export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const addCart = () => {
  return {
    type: INCREMENT,
  };
};

export const minCart = () => {
  return {
    type: DECREMENT,
  };
};
