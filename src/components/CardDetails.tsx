import { CartIcon, MinusIcon, PlusIcon } from "../assets";

import React, { useState } from "react";


type cartItem = {
  currentItem: number;
  cartItem: string;
}

type CardProps = {
  currentItem: number;
  setCurrentItem: React.Dispatch<React.SetStateAction<number>>;
  setCartItem : React.Dispatch<React.SetStateAction<cartItem>>;
  currentImage: string;
}

const CardDetails:React.FC<CardProps> = ({currentItem, setCurrentItem ,setCartItem, currentImage}) => {

  const [tempCount, setTempCount] = useState<number>(0)

  const changeListItem = (changePositive: boolean) => {
   
    if(changePositive){
      setTempCount(tempCount + 1)
    }
    else if (!changePositive && tempCount > 0){
      setTempCount(tempCount - 1)
    }

    else{
      setTempCount(0)
    }

  };

  return (
    <div className="card-text-container |m-auto flex flex-col items-center gap-8 border pr-2 max-w-[27rem]">
      <div className="card-texts | flex flex-col gap-y-2 pt-4">
        <p className="text-orange font-bold text-xs">SNEAKER COMPANY</p>
        <h1 className="font-bold text-3xl ">Fall Limited Edition Sneakers</h1>

        <p className="text-gray-blue-45 mt-6">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outersole, they'll withstand everything the
          weather can offer
        </p>
      </div>

      <div className="purchase | w-full flex flex-col justify-between gap-4">

        <div className="prices | flex flex-col font-bold pr-1">
          <div className="actual-price | space-x-4 flex items-center">
            <span className="text-2xl">$125.00 </span>
            <span className="text-sm text-orange">50%</span>
          </div>

          <div className="initial-price | text-xs text-gray-blue decoration-[1.25px] line-through">
            $250.00
          </div>
        </div>

        <div className="cart-purchase | flex xs:flex-col gap-4 h-10 font-bold ">
          <div className="item-count | w-1/3 bg-gray-blue-100">
            <button className="btn btn-outline-orange" onClick={() => changeListItem(false)}>
              <MinusIcon className="pt-[5px]" />
            </button>

            <span className="text-2xl">{tempCount}</span>

            <button className="btn btn-outline-orange"
            onClick={() => changeListItem(true)}
            >
              <PlusIcon />
            </button>
          </div>

          <button className="add-cart | bg-orange text-white flex justify-center  items-center gap-x-2 w-2/3 rounded-lg"
          onClick={()=>{
            setCurrentItem(tempCount)
            setCartItem(
              {
                currentItem: tempCount,
                cartItem: currentImage
              }
              )

              setTempCount(0)
          }}
          >
            <CartIcon className="fill-white"/>
            <p>Add to cart</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
