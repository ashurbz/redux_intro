const customerState = {
  fullName: "",
  nationalId: null,
  createAt: "",
};

const customerReducer = (state = customerState, action) => {
  switch (action.type) {
    case "customer/create":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createAt: new Date().toDateString(),
      };
    case "customer/updateName":
      return {
        ...state,
        fullName: action.payload,
      };

    default:
      return state;
  }
};

export const createCustomer = (fullName, nationalId) => {
  return {
    type: "customer/create",
    payload: { fullName: fullName, nationalId: nationalId },
  };
};

export const updateName = (updatedName) => {
  return { type: "customer/updateName", payload: updatedName };
};

export default customerReducer;
