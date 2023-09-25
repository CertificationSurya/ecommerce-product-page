import { configureStore } from "@reduxjs/toolkit";
import commerceReducer from '../features/commerce/commerceSlice'

const store = configureStore({
    reducer: {
        commerce: commerceReducer
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch