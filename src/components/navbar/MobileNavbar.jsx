import {RxHamburgerMenu} from "react-icons/rx";
import {navMenus} from "./navMenus.js";

function MobileNavbar() {
    return (
        <div>
            <button>
                <RxHamburgerMenu/>
            </button>

            <div>
                {
                    navMenus.map((menu, index) => (
                        <a href={menu.link} key={index}>
                            <menu.icon/>
                            {menu.name}
                        </a>
                    ))
                }
            </div>

        </div>
    )
}

export default MobileNavbar
