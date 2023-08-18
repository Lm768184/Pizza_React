import { Link } from 'react-router-dom';
import CreateUser from '../features/user/CreateUser';

function Home() {
  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-center text-2xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />

      <div className="flex justify-center space-x-4">
        <Link
          to="/menu"
          className="border-b-2 border-transparent text-blue-500 transition duration-300 hover:border-blue-500 hover:text-blue-600"
        >
          Menu
        </Link>
        <Link
          to="/cart"
          className="border-b-2 border-transparent text-blue-500 transition duration-300 hover:border-blue-500 hover:text-blue-600"
        >
          Cart
        </Link>
        <Link
          to="/order/new"
          className="border-b-2 border-transparent text-blue-500 transition duration-300 hover:border-blue-500 hover:text-blue-600"
        >
          Order
        </Link>
      </div>
    </div>
  );
}

export default Home;
