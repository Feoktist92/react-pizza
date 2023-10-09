import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    totalPrice: 0,
    products: [],
};
const findProduct = (state, action) =>
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
        addProduct: (state, action) => {
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
        plusItem: (state, action) => {
            const findItem = findProduct(state, action);
            if (findItem) {
                findItem.count++;
            }
            state.totalPrice += action.payload.price;
        },
        minusItem: (state, action) => {
            const findItem = findProduct(state, action);
            if (findItem) {
                findItem.count--;
            }
            state.totalPrice -= action.payload.price;
        },
        removeProduct: (state, action) => {
            const findItem = findProduct(state, action);
            if (findItem) {
                findItem.count = 0;
            }
            state.totalPrice = state.products.reduce(
                (sum, obj) => obj.price * obj.count + sum,
                0
            );
        },
        clearProducts: (state) => {
            state.products = [];
            state.totalPrice = 0;
        },
    },
});

export const { addProduct, removeProduct, clearProducts, plusItem, minusItem } =
    cartSlice.actions;
export const selectCart = (state) => state.cart;
export const cartReducer = cartSlice.reducer;
