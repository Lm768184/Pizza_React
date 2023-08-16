import { Link } from "react-router-dom";
// APPLayout children

function CartOverview() {
  return (
    <div>
      <p>
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &larr;</Link>
    </div>
  );
}

export default CartOverview;
