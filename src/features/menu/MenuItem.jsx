import { formatCurrency } from '../../utils/helpers';
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, getCart, getCurrentQuantityById } from '../cart/cartSlice';
import DeleteItem from '../cart/DeleteItem';
import UpdateItemQuantity from '../cart/UpdateItemQuantity';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // const inCart = cart.cart.find((item) => item.pizzaId === id);
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  console.log(' in MenuItem, totalCartQuantity is: ', name, currentQuantity);
  const isInCart = currentQuantity > 0;
  // const cartArr = useSelector(getCart)

  const handleAddtoCart = () => {
    // console.log(" in handleAdd before adding MenuItem, cart is: ", cart);
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
    console.log(' in handleAdd after MenuItem, cart is: ', cart);
    console.log(' in handleAdd after MenuItem, cart.cart is: ', cart.cart);
  };

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          {isInCart && (
            <div className="flex items-center gap-3 sm:gap-8">
              <UpdateItemQuantity
                pizzaId={id}
                currentQuantity={currentQuantity}
              />
              <DeleteItem pizzaId={id} />
            </div>
          )}

          {!soldOut && !isInCart && (
            <Button type="small" onClick={handleAddtoCart}>
              {' '}
              Add to Cart{' '}
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
