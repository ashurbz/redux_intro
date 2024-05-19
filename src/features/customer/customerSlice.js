import { createSlice } from "@reduxjs/toolkit";

const customerState = {
  fullName: "",
  nationalId: null,
  createAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState: customerState,
  reducers: {
    createCustomer: {
      prepare(customerName, nationalID) {
        return {
          payload: {
            customerName,
            nationalID,
          },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload;
        state.createAt = new Date().toISOString();
        state.nationalId = action.payload;
      },
    },
    updateName(state, action) {
      state.fullName = action.payload;
    },
  },
});

export const { createCustomer, updateName } = customerSlice.actions;

export default customerSlice.reducer;

// const customerReducer = (state = customerState, action) => {
//   switch (action.type) {
//     case "customer/create":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalId: action.payload.nationalId,
//         createAt: new Date().toDateString(),
//       };
//     case "customer/updateName":
//       return {
//         ...state,
//         fullName: action.payload,
//       };

//     default:
//       return state;
//   }
// };

// export const createCustomer = (fullName, nationalId) => {
//   return {
//     type: "customer/create",
//     payload: { fullName: fullName, nationalId: nationalId },
//   };
// };

// export const updateName = (updatedName) => {
//   return { type: "customer/updateName", payload: updatedName };
// };

// export default customerReducer;
