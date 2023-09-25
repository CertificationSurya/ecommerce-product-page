import { useState } from "react";

import { avatar, CartIcon, Logo, MenuIcon } from "../assets";
import CartDetail from "./subComponents/CartDetail";
import MobileNav from "./subComponents/MobileNav";

import { useAppSelector } from "../app/hooks";

const listItems = ["Collections", "Men", "Women", "About", "Contact"];

const Navbar = () => {
// store
  const { currentItem } = useAppSelector(state => state.commerce);

  const [mobile, setMobile] = useState<boolean>(window.innerWidth < 768);
  const [openMobNav, setOpenMobNav] = useState<boolean>(false);
  const [openCart, setOpenCart] = useState<boolean>(false);

  window.addEventListener("resize", () => {
    setMobile(window.innerWidth < 768);
  });

  return (
    <>
      {openMobNav && (
        <MobileNav listItems={listItems} setOpenMobNav={setOpenMobNav}/>
      )}
      <nav className="nav | flex justify-around h-20 border px-5">
        <div className="nav-logo | flex pt-6 space-x-5">
          {mobile && (
            <MenuIcon
              onClick={() => setOpenMobNav((prev) => !prev)}
              className="mt-1 h-6 cursor-pointer"
            />
          )}

          <Logo />
          {!mobile && (
            <ul className="flex space-x-3">
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

            {currentItem > 0 && (
              <span className="absolute -top-2.5 -right-2 text-[10px] border rounded-2xl px-2 bg-orange text-white">
                {currentItem}
              </span>
            )}
          </div>
          <img
            src={avatar}
            alt="avatar"
            className="w-10 h-10 rounded-full hover:border-orange border-2 cursor-pointer"
          />
        </div>

        {openCart && <CartDetail currentItem={currentItem} />}
      </nav>
    </>
  );
};

export default Navbar;
