export default (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case "WITHDRAW":
      return { ...state, totalAmount: state.totalAmount - action.amount };
    default:
      return state;
  }
};
