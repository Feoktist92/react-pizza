import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer } from './slices/filtersSlice';
import { cartReducer } from './slices/cartSlice';
import { pizzasReducer } from './slices/pizzasSlice';
import { useDispatch } from 'react-redux';



const store = configureStore({
    reducer: {
        filters: filtersReducer,
        cart: cartReducer,
        pizzas: pizzasReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();


export default store;
