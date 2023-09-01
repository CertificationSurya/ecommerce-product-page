import CardDetails from "./components/CardDetails";
import ImageContainer from "./components/ImageContainer";
import Navbar from "./components/Navbar";
import { useState } from "react";

import { product1 } from "./assets";

type cartItem = {
  currentItem: number;
  cartItem: string;
}

const App = () => {

  const [currentItem, setCurrentItem] = useState<number>(0);
  const [cartItem, setCartItem] = useState<cartItem>({
    currentItem: currentItem,
    cartItem: ' '    
  });

  const [currentImage, setCurrentImage] = useState<string>(product1);

  return (
    <>
      <Navbar currentItem={currentItem} cartItem={cartItem}/>
      <div className="content | flex justify-center items-center ">
        <div className="content-wrapper | flex xs:flex-col items-center">
        <ImageContainer currentImage={currentImage} setCurrentImage={setCurrentImage}/>
        <CardDetails currentItem={currentItem} setCurrentItem={setCurrentItem} setCartItem={setCartItem} currentImage={currentImage}/>
        </div>
      </div>
    </>
  );
};

export default App;
