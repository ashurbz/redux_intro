import { combineReducers, createStore } from "redux";
import customerReducer from "./features/customer/customerSlice";
import accountReducer from "./features/account/accountSlice";
const rootReducers = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducers);

// store.dispatch({ type: "account/deposit", payload: 500 });
// store.dispatch({ type: "account/withdraw", payload: 200 });
// store.dispatch({
//   type: "account/requestLoan",
//   payload: {
//     amount: 2000,
//     loanPurpose: "buying a car",
//   },
// });

// store.dispatch({ type: "account/payLoan" });

export default store;
