import { RxHamburgerMenu } from "react-icons/rx";
import { navMenus } from "./navMenus.js";
import { useState } from "react";

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="self-end md:hidden">
      <button onClick={() => setIsOpen(!isOpen)}>
        <RxHamburgerMenu />
      </button>

      {isOpen && (
        <nav className="absolute right-4 flex w-fit flex-col gap-2 divide-y divide-gray-500 rounded-xl bg-gray-100 p-4">
          {navMenus.map((menu, index) => (
            <a
              href={menu.link}
              key={index}
              className="flex items-center gap-2 p-2 hover:bg-gray-200"
            >
              <menu.icon />
              {menu.name}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}

export default MobileNavbar;
