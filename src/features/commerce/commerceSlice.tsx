import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { product1 } from '../../assets';

type cartItemType = {
    currentItem: number,
    cartItem: string
}

type InitialStateType = {
    currentItem: number;
    cartItem: {
      currentItem: number;
      cartItem: string;
    };
    currentImage: string;
    blockScreen: boolean;
  };
  
const initialState: InitialStateType = {
    currentItem: 0,
    cartItem: {
      currentItem: 1,
      cartItem: '',
    },
    currentImage: product1,
    blockScreen: false
}

const commerceSlice = createSlice({
    name: 'commerce',
    initialState,
    reducers : {
        setCurrentItem: (state, action: PayloadAction<number>) =>{
            state.currentItem = action.payload
        },
        setCartItem: (state, action: PayloadAction<cartItemType>) =>{
            state.cartItem.currentItem = action.payload.currentItem;
            state.cartItem.cartItem = action.payload.cartItem;
        },
        setCurrentImage: (state, action: PayloadAction<string>) =>{
            state.currentImage = action.payload
        },
        setBlockScreen: (state, action: PayloadAction<boolean>) =>{
            state.blockScreen = action.payload
        },
    },                  
})

export default commerceSlice.reducer;
export const commerceAction = commerceSlice.actions