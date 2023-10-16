import { CartItem } from "../redux/slices/cartSlice";

export const calcTotalPrice = (products: CartItem[]) => {
    return products.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};