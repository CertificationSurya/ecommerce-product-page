import { CloseIcon } from "../../assets";

type listProps = {
  listItems: string[];
  setOpenMobNav: React.Dispatch<React.SetStateAction<boolean>>;
  setBlockScreen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileNav: React.FC<listProps> = ({ listItems, setOpenMobNav, setBlockScreen }) => {
  setBlockScreen(true);
  return ( 
    <nav className="mobile absolute h-full w-[15rem] py-7 px-5 z-50 bg-white border-r-2 border-stone-100">
      <CloseIcon
        // src={closeIcon}
        onClick={() =>{
          setOpenMobNav(false)
          setBlockScreen(false);
          }}
        className="h-6 cursor-pointer"
      />

      <ul className="flex flex-col mt-10 gap-2 justify-center">
        {listItems.map((list, index) => (
          <li
            key={index}
            className="py-1 font-bold cursor-pointer"
          >
            <a href="#"> {list} </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNav;
