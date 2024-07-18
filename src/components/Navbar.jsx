import { appleImg, bagImg, searchImg } from "../utils";
// import appleImg from "../utils/appleImg";
import { navlist } from "../constants";
const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="w-full flex screen-max-width">
        {/* Update the src paths for images to reflect the root path serving */}
        <img src={appleImg.replace('/public', '/public/assets/images/apple.svg')} alt="Apple" width={14} height={18} />

        <div className="flex flex-1 justify-center max-sm::hidden">
          {navlist.map((nav) => (
            <div
              key={nav}
              className="px-5 text-sm cursor-pointer text-gray-50 hover:text-white transition-all"
            >
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          {/* Update the src paths for images to reflect the root path serving */}
          <img src={searchImg.replace('/public', '')} alt="search" width={18} height={18} />
          <img src={bagImg.replace('/public', '')} alt="search" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
