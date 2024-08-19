import {HiHome} from "react-icons/hi";
import {MdOutlineProductionQuantityLimits} from "react-icons/md";
import {LuNewspaper} from "react-icons/lu";
import {FaBlog} from "react-icons/fa";
import {PiMailbox} from "react-icons/pi";

export const navMenus = [
    {

        name: 'Home',
        path: '/',
        icon: HiHome
    },
    {
        name: 'Products',
        path: '/products',
        icon: MdOutlineProductionQuantityLimits
    },
    {
        name: "Pages",
        path: '/pages',
        icon: LuNewspaper
    },
    {
        name: 'Blog',
        path: '/blog',
        icon: FaBlog
    },
    {
        name: 'Contact',
        path: '/contact',
        icon: PiMailbox
    }
]