import { useState } from "react";

import { avatar, CartIcon, Logo, MenuIcon } from "../assets";
import CartDetail from "./subComponents/CartDetail";
import MobileNav from "./subComponents/MobileNav";

const listItems = ["Collections", "Men", "Women", "About", "Contact"];

const Navbar = () => {
  const [mobile, setMobile] = useState<boolean>(window.innerWidth < 768);

  const [openMobNav, setOpenMobNav] = useState<boolean>(false);
  const [openCart, setOpenCart] = useState<boolean>(false);
  const [shoppedItems, setShoppedItems] = useState<number>(0);

  window.addEventListener("resize", () => {
    setMobile(window.innerWidth < 768);
  });


  return (
    <>
    {
      openMobNav && <MobileNav listItems={listItems} setOpenMobNav = {setOpenMobNav}/>
    }
      <nav className="flex justify-between px-6 h-20 border">
        <div className="flex pt-6 space-x-10">
          {mobile && (
            <MenuIcon
              onClick={() => setOpenMobNav((prev) => !prev)}
              className="h-6  cursor-pointer"
            />
          )}

          <Logo  className="h-5" />

          {!mobile && (
            <ul className="flex justify-center space-x-3">
              {listItems.map((list, index) => (
                <li
                  key={index}
                  className="h-full px-3 text-gray-blue-45 hover:border-b-4 hover:border-orange cursor-pointer"
                >
                  <a href="#"> {list} </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="extra-menu | flex items-center space-x-5 mb-2">
          <div className="cart relative">
            <CartIcon
              className="h-5 cursor-pointer"
              onClick={() => setOpenCart((prev) => !prev)}
            />

            {shoppedItems > 0 && (
              <span className="absolute -top-2.5 -right-2 text-[10px] border rounded-2xl px-2 bg-orange text-white">
                {shoppedItems}
              </span>
            )}
          </div>
          <img
            src={avatar}
            alt="avatar"
            className="w-10 h-10 rounded-full hover:border-orange border-2 cursor-pointer"
          />
        </div>

        {openCart && <CartDetail />}
      </nav>
    </>
  );
};

export default Navbar;
