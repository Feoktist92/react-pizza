import axios from 'axios';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';


type fetchPizzasParams = {
    categoryId: number;
    sort: { sortProperty: string; name: string };
    sortMethod: boolean;
    searchValue: string;
    currentPage: number;
}

export const fetchPizzas = createAsyncThunk<Pizza[], fetchPizzasParams>(
    'pizzas/fetchPizzasStatus',
    async (params) => {
        const { categoryId, sort, sortMethod, searchValue, currentPage } =
            params;
        const {data} = await axios.get<Pizza[]>(
            `https://6517b526582f58d62d351525.mockapi.io/Items?page=${currentPage}&limit=4&${
                categoryId > 0 ? `category=${categoryId}` : ''
            }&sortBy=${sort.sortProperty}&order=${
                sortMethod === false ? `desc` : `asc`
            }&${searchValue ? `search=${searchValue}` : ''}`
        );
        return data;
    }
);

type Pizza = {
    id: string;
    imageUrl: string;
    title: string;
    types: number[];
    sizes: number[];
    price: number;
    category: number;
    rating: number;
};
interface PizzasSliceState {
    items: Pizza[];
    status: Status;
}
export enum Status {
    LOADING = 'loading',
    RECEIVED = 'received',
    ERROR = 'error',
}

const initialState: PizzasSliceState = {
    items: [],
    status: Status.LOADING,
};

const cartSlice = createSlice({
    name: 'pizzas',
    initialState: initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPizzas.pending, (state) => {
                state.status = Status.LOADING;
                state.items = [];
            })
            .addCase(fetchPizzas.fulfilled, (state, action: PayloadAction<Pizza[]>) => {
                state.status = Status.RECEIVED;
                state.items = action.payload;
            })
            .addCase(fetchPizzas.rejected, (state) => {
                state.status = Status.ERROR;
                state.items = [];
            });
    },
});

export const { setItems } = cartSlice.actions;
export const selectPizzas = (state: RootState) => state.pizzas;
export const pizzasReducer = cartSlice.reducer;
