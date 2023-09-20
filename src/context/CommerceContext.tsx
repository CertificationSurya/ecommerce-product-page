import { createContext } from "react";


type CommerceContextData = {
    currentItem: number;
    cartItem: {
      currentItem: number;
      cartItem: string;
    };
    currentImage: string;
    blockScreen: boolean;
    setCurrentItem: (item: number) => void;
    setCartItem: (item: { currentItem: number; cartItem: string }) => void;
    setCurrentImage: React.Dispatch<React.SetStateAction<string>>;
    setBlockScreen: React.Dispatch<React.SetStateAction<boolean>>;
  };

const CommerceContext = createContext<CommerceContextData>({} as CommerceContextData);

export default CommerceContext;