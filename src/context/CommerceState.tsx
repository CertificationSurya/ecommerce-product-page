import CommerceContext from "./CommerceContext";
import React, { useState} from 'react'

import { product1 } from "../assets";

type CommerceStateProps = {
        children: React.ReactNode;
}

type cartItem = {
    currentItem: number;
    cartItem: string;
  }
  

const CommerceState:React.FC<CommerceStateProps> = (props) => {

  
    const [currentItem, setCurrentItem] = useState<number>(0);
    const [cartItem, setCartItem] = useState<cartItem>({
      currentItem: currentItem,
      cartItem: ' '    
    });
  
    const [currentImage, setCurrentImage] = useState<string>(product1);
    
    const [blockScreen, setBlockScreen] = useState<boolean>(false)



  return (
    <CommerceContext.Provider value={{
        currentImage,
        setCurrentImage,
        cartItem,
        setCartItem,
        currentItem,
        setCurrentItem,
        blockScreen,
        setBlockScreen
    }}>
        {props.children}
    </CommerceContext.Provider> 
  )
}

export default CommerceState
