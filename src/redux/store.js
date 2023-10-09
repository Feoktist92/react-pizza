import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer } from './slices/filtersSlice';
import { cartReducer } from './slices/cartSlice';
import { pizzasReducer } from './slices/pizzasSlice';
const store = configureStore({
    reducer: {
        filters: filtersReducer,
        cart: cartReducer,
        pizzas: pizzasReducer,
    },
});

export default store;
