import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: [],
//   cart: [
//     {
//       pizzaId: 12,
//       name: 'Pizza 12',
//       quantity: 2,
//       unitPrice: 16,
//       totalPrice: 32,
//     },
//   ],
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cart.push(action.payload);
    },
    deleteItem: (state, action) => {
      state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity: (state, action) => {
        const item = state.cart.find((item) => item.pizzaId === action.payload);
        item.quantity++;
        item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity: (state, action) => {
        const item = state.cart.find((item) => item.pizzaId === action.payload);
        item.quantity--;
        item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart: (state) => {
        state.cart = [];
    },
  },
});

export const { addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;

export const getTotalCartPrice = (state) => state.cart.cart.reduce((acc, item) => acc + item.totalPrice, 0);
export const getTotalCartQuantity = (state) => state.cart.cart.reduce((acc, item) => acc + item.quantity, 0)
  