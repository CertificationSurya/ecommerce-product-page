type CartDetailProp = {
  currentItem: number;
  cartItem: {
    currentItem: number;
    cartItem: string;
  };
};

const CartDetail: React.FC<CartDetailProp> = ({ currentItem, cartItem }) => {
  return (
    <div className="cart-detail | bg-white absolute right-[2rem] top-[4rem] z-10 rounded-lg bg-white">
      <div className="cart-wrapper | bg-white">
        <div className="cart-about | font-bold h-[2.75rem] border-b border-gray-blue-45 px-2 pt-2">
          Cart
        </div>

        <div className="cart-details | relative h-[9rem] ">
          {currentItem == 0 ? (
            <h1 className="ab-center absolute font-bold text-gray-blue-45">
              Your cart is empty
            </h1>
          ) : (
            <>
            <div className="check-cart | flex gap-4 py-2">
              <div className="check-details-img">
                <img src={cartItem.cartItem} alt="saved cart" className="h-12 w-24" />
              </div>

              <div className="check-datails-text text-gray-blue-45 font-bold">
                Fallback Limited Edition Sneakers $125 * {cartItem.currentItem} 
                <span className="text-black font-bold"> ${(125 * cartItem.currentItem /1.0).toFixed(2)}  </span>
              </div>
            </div>

            <button className="checkout bg-orange w-full my-6 p-2 rounded-lg font-bold text-white">
              Checkout
            </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDetail;
