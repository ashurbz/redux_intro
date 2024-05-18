import { useSelector } from "react-redux";

function Customer() {
  const name = useSelector((store) => store.customer.fullName);
  console.log(name);
  return <h2>👋 Welcome, %NAME%</h2>;
}

export default Customer;
