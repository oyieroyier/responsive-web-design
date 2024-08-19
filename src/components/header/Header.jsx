import Navbar from "../navbar/Navbar.jsx";
import {IoIosSearch} from "react-icons/io";
// import MobileNavbar from "../navbar/MobileNavbar.jsx";

function Header() {
    return (
        <header>

            <div>

                <img src="https://placehold.co/100x30/black/white" alt="Page Logo"/>

                <div>

                    {/*Search Bar*/}
                    <div>
                        <label htmlFor="search">
                            <IoIosSearch/>
                        </label>
                        <input type="text" placeholder="Search here" id="search"/>
                    </div>

                    {/*Contact Info*/}
                    <div>
                        <a href="mailto:example@mail.com" target="_blank">example@mail.com</a>
                        <a href="tel:(000) 888-88">(000) 888-88</a>
                    </div>

                </div>
            </div>

            <Navbar/>

            {/*<MobileNavbar/>*/}
        </header>
    )
}

export default Header
