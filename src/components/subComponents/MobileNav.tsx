// store
import { commerceAction } from "../../features/commerce/commerceSlice";
const { setBlockScreen } = commerceAction;

import { CloseIcon } from "../../assets";
import { useAppDispatch } from "../../app/hooks";
import { useEffect } from "react";

type listProps = {
  listItems: string[];
  setOpenMobNav: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileNav: React.FC<listProps> = ({ listItems, setOpenMobNav }) => {
  // store
  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(setBlockScreen(true));
  }, [])

  return (
    <nav className="mobile absolute h-full w-[15rem] py-7 px-5 z-50 bg-white border-r-2 border-stone-100">
      <CloseIcon
        // src={closeIcon}
        onClick={() => {
          setOpenMobNav(false);
         dispatch( setBlockScreen(false));
        }}
        className="h-6 cursor-pointer"
      />

      <ul className="flex flex-col mt-10 gap-2 justify-center">
        {listItems.map((list, index) => (
          <li key={index} className="py-1 font-bold cursor-pointer">
            <a href="#"> {list} </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNav;
