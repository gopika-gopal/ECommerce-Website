import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice';
import cartReducer from './cartSlice';
import tokenReducer from './tokenSlice';

const ecoStore = configureStore(
    {
        reducer: {
            user: userReducer,
            cart: cartReducer,
            token: tokenReducer
        }
    }
)

export default ecoStore;
