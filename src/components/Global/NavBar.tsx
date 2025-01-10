"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { GiSpiderWeb } from "react-icons/gi";

const NavBar = () => {
    const path = usePathname();
    const [hamburgerToggle, setHamburgerToggle] = useState(false)
    return (
        <div className="w-full font-press2p container absolute px-20 mx-auto z-50 ">
            <div className={` flex items-center justify-between  gap-x-2 mx-auto lg:py-6 md:py-5 sm:py-5 py-3.5`}>
                {/* Desktop menu */}
                <nav className="w-full bg-purple1/10 shadow-lg p-4 rounded-md xl:flex justify-between items-center hidden">
                    <div className=" flex  items-center justify-center gap-1">
                       <GiSpiderWeb className="text-4xl"/> <span>-3-Dev</span>
                    </div>
                    <button className="bg-purple1/50 hover:bg-purple1/40 px-4 py-2 rounded-md">
                        Buy Me A Coffee
                    </button>

                </nav>
            </div>

        </div>
    )
}

export default NavBar
