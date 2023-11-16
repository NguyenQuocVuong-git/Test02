import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [click, setClick] = useState(false);
  const mobile = () => {
    setClick(!click);
  };

  return (
    <div className="px-5 py-5 lg:px-10 lg:py-5 xl:px-40 xl:py-4 bg-bgNavbar ">
      <ul className="flex text-sm text-black dark:text-white font-semibold md:tracking-wide flex-col gap-2 md:flex-row md:gap-8">
        <li>
          <Link className="font-dancing-script text-4xl" to="/">Studio</Link>
        </li>
      </ul>
      <div className="block md:hidden">
        <button onClick={mobile}>
          <ul
            className={`text-sm ${click ? "block" : "hidden"
              } w-full flex flex-col gap-y-4 absolute top-10 left-0 right-0 text-black dark:text-white font-semibold z-10 backdrop-blur-sm`}
          >
            <li className=" rounded-md h-8 ">
              <Link to="/">Home</Link>
            </li>
            <li className=" rounded-md h-8">
              <Link to="/explore">Explore</Link>
            </li>
            <li className=" rounded-md h-8">
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
