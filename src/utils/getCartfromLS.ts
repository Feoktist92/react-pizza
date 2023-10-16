import { CartItem } from "../redux/slices/cartSlice";
import { calcTotalPrice } from "./calcTotalPrice";

export const getCartfromLS = () => {
    const data = localStorage.getItem('cart');
    const products = data ? JSON.parse(data): [];
    return {
        products: products as CartItem[],
        totalPrice: calcTotalPrice(products),
    };

};