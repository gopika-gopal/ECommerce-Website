import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    cartItems: [],
    subtotal: 0,
    tax: 0,
    shippingCharges: 0,
    total: 0,
    shippingInfo: {
        address: "",
        city: "",
        state: "",
        country: "",
        pinCode: ""
    }
}

const cartSlice = createSlice({
    name: 'cartReducer',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.loading = true;

            const index = state.cartItems.findIndex((i) => i.id === action.payload.id)
            if (index !== -1) state.cartItems[index] = action.payload;
            else state.cartItems.push(action.payload)
            state.loading = false;
        },
        removeCartItems: (state, action) => {
            state.cartItems = state.cartItems.filter(i => i.id !== action.payload)
            state.loading = false;
        },
        calculatePrice: (state) => {
            const subtotal = state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

            state.subtotal = subtotal;
            state.shippingCharges = state.subtotal > 1000 ? 200 : 0;
            state.total = state.subtotal + state.shippingCharges;
        },
        saveShippingInfo: (state, action) => {
            state.shippingInfo = action.payload
        },
        resetCart: () => initialState,

    },
})

export const { addToCart, saveShippingInfo, resetCart, calculatePrice, removeCartItems } = cartSlice.actions;
export default cartSlice.reducer;