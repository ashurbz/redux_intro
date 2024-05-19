import { createSlice } from "@reduxjs/toolkit";

const accountState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const accounSlice = createSlice({
  name: "account",
  initialState: accountState,
  reducers: {
    deposit(state, action) {
      state.balance = state.balance + action.payload;
    },
    withdraw(state, action) {
      state.balance = state.balance - action.payload;
    },
    requestLoan: {
      prepare(amount, purpose) {
        return {
          payload: {
            amount,
            purpose,
          },
        };
      },
      reducer(state, action) {
        state.loan = state.loan + action.payload;
        state.loanPurpose = action.payload;
      },
    },
    payLoan(state, action) {
      state.balance = state.balance - state.loan;
      state.loan = 0;

      state.loanPurpose = "";
    },
  },
});

export const { withdraw, requestLoan, payLoan } = accounSlice.actions;

export default accounSlice.reducer;

// payLoan (state,action){
//   state.balance = state.balance- state.loan
//   state.loan= 0,
//   state.loanPurpose ="",
// }
// const accountReducer = (state = accountState, action) => {
//   switch (action.type) {
//     case "account/deposit":
//       return { ...state, balance: state.balance + action.payload };
//     case "account/withdraw":
//       return { ...state, balance: state.balance - action.payload };
//     case "account/requestLoan":
//       return {
//         ...state,
//         loan: state.loan + action.payload.amount,
//         loanPurpose: action.payload.loanPurpose,
//       };

//     case "account/payLoan":
//       return {
//         ...state,
//         loan: 0,
//         loanPurpose: "",
//         balance: state.balance - state.loan,
//       };

//     default:
//       return state;
//   }
// };

export const deposit = (amount, currency) => {
  console.log(currency, amount);
  if (currency === "USD") return { type: "account/deposit", payload: amount };

  return async function conversion(dispatch) {
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    const converted = data.rates.USD;
    console.log(converted);

    dispatch({ type: "account/deposit", payload: converted });
  };
};
// export const withdraw = (amount) => {
//   return { type: "account/withdraw", payload: amount };
// };
// export const requestLoan = (amount, purpose) => {
//   return {
//     type: "account/requestLoan",
//     payload: {
//       amount: amount,
//       loanPurpose: purpose,
//     },
//   };
// };
// export const payLoan = () => {
//   return { type: "account/payLoan" };
// };

// export default accountReducer;
