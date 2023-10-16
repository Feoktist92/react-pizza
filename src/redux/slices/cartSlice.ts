import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { getCartfromLS } from '../../utils/getCartfromLS';
import { calcTotalPrice } from '../../utils/calcTotalPrice';

export type CartItem = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    type: string;
    size: number;
    count: number;
};
interface CartSliceState {
    totalPrice: number;
    products: CartItem[];
}


const {products, totalPrice} = getCartfromLS();
const initialState: CartSliceState = {
    totalPrice,
    products,
};


const findProduct = (state: CartSliceState, action: { payload: CartItem }) =>
    state.products.find(
        (obj) =>
            obj.id === action.payload.id &&
            obj.type === action.payload.type &&
            obj.size === action.payload.size
    );

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<CartItem>) => {
            const findItem = findProduct(state, action);
            if (findItem) {
                findItem.count++;
            } else {
                state.products.push({
                    ...action.payload,
                    count: 1,
                });
            }
            state.totalPrice += action.payload.price;
        },
        plusItem: (state, action: PayloadAction<CartItem>) => {
            const findItem = findProduct(state, action);
            if (findItem) {
                findItem.count++;
            }
            state.totalPrice += action.payload.price;
        },
        minusItem: (state, action: PayloadAction<CartItem>) => {
            const findItem = findProduct(state, action);
            if (findItem) {
                findItem.count--;
            }
            state.totalPrice -= action.payload.price;
        },
        removeProduct: (state, action: PayloadAction<CartItem>) => {
            const findItem = findProduct(state, action);
            if (findItem) {
                findItem.count = 0;
            }
            state.totalPrice = calcTotalPrice(state.products);
            ;
        },
        clearProducts: (state) => {
            state.products = [];
            state.totalPrice = 0;
        },
    },
});

export const { addProduct, removeProduct, clearProducts, plusItem, minusItem } =
    cartSlice.actions;
export const selectCart = (state: RootState) => state.cart;
export const cartReducer = cartSlice.reducer;
