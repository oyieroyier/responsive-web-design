import {SiGoogletranslate} from "react-icons/si";
import {PiCaretRight} from "react-icons/pi";
import {navMenus} from "./navMenus.js";

function Navbar() {
    return (
        <nav>
            <div>
                {
                    navMenus.map((menu, index) => (
                        <a key={index} href={menu.path}>{menu.name}</a>
                    ))
                }
            </div>

            <div>
                <button>
                    <SiGoogletranslate/> <span>English</span>
                </button>

                <a href="/sign-up"><span>Sign up</span> <PiCaretRight/></a>
            </div>
        </nav>
    )
}

export default Navbar
