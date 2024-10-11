// import Button from "./Button";
// import { useEffect, useRef, useState } from "react";

// export default function Navbar() {


//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [isDropdown, setIsDropdown] = useState(false);
//     const [hoveredLink, setHoveredLink] = useState(null);
//     const megaMenuRef = useRef(null);
//     const megaMenuRef2 = useRef(null);
//     const [menuHeight, setMenuHeight] = useState(0);

//     const handleDropdownEnter = () => {
//         setIsDropdown(true);
//     };

//     const handleDropdownLeave = () => {
//         setIsDropdown(false);
//         setHoveredLink(null);
//     };

//     const showMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     useEffect(() => {
//         const timeoutId = setTimeout(() => {
//             if (isDropdown) {
//                 const height1 = megaMenuRef2.current ? megaMenuRef.current.scrollHeight : 0;
//                 const height2 = megaMenuRef.current ? megaMenuRef2.current.scrollHeight : 0;
//                 setMenuHeight(height1 + height2 - 80 ); // +30 for additional spacing
//             } else {
//                 setMenuHeight(0);
//             }
//         },100);

//         return () => clearTimeout(timeoutId);
//     }, [isDropdown]);

//     return (
//         <>
//             <div className="custom-nav-container">
//                 <div className="nav-container">
//                     <div className={"nav-menu-lunate " + (isMenuOpen ? "mobile-nav-menu-lunate" : "")}>
//                         <div className={"logo-menubtn " + (isMenuOpen ? 'nav-menu-mobile-logo-color' : "")}>
//                             <div className="lunate-logo">LUNATE</div>
//                             <div onClick={showMenu} className={"hamburger-container " + (isMenuOpen ? 'hamburger-mobile-color' : "")}>
//                                 <div className={"hamburger-nav1 ham " + (isMenuOpen ? 'hamburger-mobile-color-ham' : "")}></div>
//                                 <div className={"hamburger-nav2 ham " + (isMenuOpen ? 'hamburger-mobile-color-ham' : "")}></div>
//                                 <div className={"hamburger-nav3 ham " + (isMenuOpen ? 'hamburger-mobile-color-ham' : "")}></div>
//                             </div>
//                         </div>
//                         <ul className={"nav-items " + (isMenuOpen ? "nav-items-mobile-responsive" : "")}>
//                             <li
//                                 onMouseEnter={() => {
//                                     handleDropdownEnter();
//                                     setHoveredLink('about');

//                                 }}
//                                 onMouseLeave={handleDropdownLeave}
//                                 className="items-info droppable aboutlunate"
//                             >
//                                 <a href="#" className="items-info main-menu-items">About Lunate
//                                     <svg className="about-drop-arrow" width="24" height="24" viewBox="0 0 24 24" fill="transparent" xmlns="http://www.w3.org/2000/svg">
//                                         <path d="M6 9L12 15L18 9" stroke="currentColor" />
//                                     </svg>
//                                 </a>
//                                 <div className="mega-sub-menu">
//                                     <ul ref={megaMenuRef} className={'mega-menu-items-container ' + (isDropdown ? "submenu-slideout" : "")}>
//                                         {hoveredLink === 'about' && (
//                                             <>
//                                                 <li className="mega-menu-items">Our Team</li>
//                                                 <li className="mega-menu-items">Who We Are</li>
//                                             </>
//                                         )}
//                                     </ul>
//                                     <ul ref={megaMenuRef2} className={'mega-menu-items-container ' + (isDropdown ? "submenu-slideout" : "")}>
//                                         {hoveredLink === 'approach' && (
//                                             <>
//                                                 <li className="mega-menu-items approach-sub">Strategies</li>
//                                                 <li className="mega-menu-items approach-sub">Assets Classes</li>
//                                                 <li className="mega-menu-items approach-sub">Solutions & Products</li>
//                                             </>
//                                         )}
//                                     </ul>
//                                 </div>
//                             </li>
//                             <li
//                                 onMouseEnter={() => {
//                                     handleDropdownEnter();
//                                     setHoveredLink('approach');
//                                 }}
//                                 onMouseLeave={handleDropdownLeave}
//                                 className="items-info droppable ourapproachdrop">
//                                 <a href="#" className="items-info main-menu-items">Our Approach
//                                     <svg className="about-drop-arrow" width="24" height="24" viewBox="0 0 24 24" fill="transparent" xmlns="http://www.w3.org/2000/svg">
//                                         <path d="M6 9L12 15L18 9" stroke="currentColor" />
//                                     </svg>
//                                 </a>
//                                 <div className="mega-sub-menu">

//                                 </div>
//                             </li>
//                             <li className="items-info"><a href="#" className="items-info main-menu-items">News & Insights</a></li>
//                             <li className="items-info"><a href="#" className="items-info main-menu-items">Careers</a></li>
//                             <Button text="Contact Us" />
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//             <div className="mega-menu-cover" style={{ height: `${menuHeight}px`, transition: 'height 0.2s ease' }}></div>
//         </>
//     );
// }



















import { useEffect, useRef, useState } from "react";
import Button from "./Button";

export default function Navbar() {
    const [Navbarhovered, setNavbarhovered] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menuHeight, setMenuHeight] = useState(0);
    const MegaRef = useRef(null);
    const MegaRef2 = useRef(null);
    const [hovered, sethovered] = useState("")
    const [solhovered, setsolhovered] = useState(false)
    const [isScrolled, setIsScrolled] = useState(true);
    const NavRef = useRef(null);
    const lastScrollY = useRef(0);

    const showMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY.current) {
                setIsScrolled(false);
            } else {
                setIsScrolled(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        // Update the height of the mega menu cover based on the content's height
        if (hovered) {
            const menuHeight = MegaRef2.current.scrollHeight;
            const menuHeight2 = MegaRef.current.scrollHeight; // Use scrollHeight to account for all content
            const sumofheight = menuHeight + menuHeight2;

            setMenuHeight(sumofheight);
            console.log(menuHeight)

        } else {
            setMenuHeight(0)
        }
    });




    // useEffect(() => {
    //     if (!isScrolled) {
    //         // Lock the scroll
    //         document.body.style.overflow = 'hidden';
    //     } else {
    //         // Unlock the scroll
    //         document.body.style.overflow = 'unset';
    //     }

    //     // Clean up to ensure scroll is unlocked when the component unmounts
    //     return () => {
    //         document.body.style.overflow = 'unset';
    //     };
    // }, [!isScrolled]);





    return (
        <div>
            <div
                onMouseLeave={() => {
                    sethovered("")

                    setsolhovered(false)

                }}

                ref={NavRef} className={"custom-nav-container " + (!isScrolled ? "fadeout-scroll" : "")}>
                <div className={"nav-container " + (!isScrolled ? "fadeout-scroll-background" : "")}>
                    <div className={"nav-menu-lunate " + (isMenuOpen ? "mobile-nav-menu-lunate" : "")}>
                        <div className={"logo-menubtn " + (isMenuOpen ? 'nav-menu-mobile-logo-color' : "")}>
                            <div className="lunate-logo">LUNATE</div>
                            <div onClick={showMenu} className={"hamburger-container " + (isMenuOpen ? 'hamburger-mobile-color' : "")}>
                                <div className={"hamburger-nav1 ham " + (isMenuOpen ? 'hamburger-mobile-color-ham' : "")}></div>
                                <div className={"hamburger-nav2 ham " + (isMenuOpen ? 'hamburger-mobile-color-ham' : "")}></div>
                                <div className={"hamburger-nav3 ham " + (isMenuOpen ? 'hamburger-mobile-color-ham' : "")}></div>
                            </div>
                        </div>
                        <div className="navitems-megamenu-wrapper">
                            <ul className={"nav-items " + (isMenuOpen ? "nav-items-mobile-responsive" : "")}>
                                <li className="items-info droppable aboutlunate"
                                    onMouseEnter={() => {

                                        sethovered("about")
                                    }}



                                >
                                    <a href="#" className="items-info main-menu-items" >About Lunate
                                        <svg className="about-drop-arrow" width="24" height="24" viewBox="0 0 24 24" fill="transparent" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 9L12 15L18 9" stroke="currentColor" />
                                        </svg>
                                    </a>


                                    <div className={"mega-menu-items-about-container " + (hovered ? "mega-menu-drop" : "mega-menu-pull")} ref={MegaRef}>
                                        {hovered === "about" &&
                                            (
                                                <>
                                                    <ul className="mega-menu-items-about">
                                                        <li className="aboutlunate-menu">Who We Are</li>
                                                        <li className="aboutlunate-menu">Our Team</li>

                                                    </ul>
                                                </>
                                            )
                                        }

                                    </div>






                                </li>

                                <li
                                    onMouseEnter={() => {

                                        sethovered("approach")
                                    }}
                                    onMouseLeave={() =>{
                    
                                        setsolhovered(false)
                    
                                    }}

                                    className="items-info droppable ourapproachdrop">
                                    <a href="" className="items-info main-menu-items">Our Approach
                                        <svg className="about-drop-arrow" width="24" height="24" viewBox="0 0 24 24" fill="transparent" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 9L12 15L18 9" stroke="currentColor" />
                                        </svg>
                                    </a>

                                    <div className="approach-menu-container">
                                        <div className={"mega-menu-items-approach-container " + (hovered ? "mega-menu-drop" : "mega-menu-pull")} ref={MegaRef2}>
                                            {hovered === "approach" &&
                                                (
                                                    <>
                                                        <ul className="mega-menu-items-approach">
                                                            <li className="approach-menu">Strategies</li>
                                                            <li className="approach-menu">Assets Classes</li>
                                                            <li
                                                                onMouseEnter={() => {
                                                                    setsolhovered(true)
                                                                }}


                                                                className="approach-menu">Solutions & Product</li>
                                                        </ul>
                                                    </>
                                                )
                                            }
                                            <div className={"inner-dropdown-approach " + (solhovered ? "within-drop-down" : "")}>
                                                <ul>
                                                    <li className="inner-text-approach">EFT overview</li>
                                                    <li className="inner-text-approach">EFT overview</li>
                                                    <li className="inner-text-approach">EFT overview</li>
                                                    <li className="inner-text-approach">EFT overview</li>
                                                    <li className="inner-text-approach">EFT overview</li>
                                                    <li className="inner-text-approach">EFT overview</li>
                                                
                                                </ul>
                                            </div>
                                        </div>

                                    </div>


                                </li>
                                <li
                                    onMouseEnter={() => {
                                        sethovered("")
                                    }}
                                    className="items-info"><a href="" className={"items-info main-menu-items"}>News & Insights</a></li>


                                <li
                                    onMouseEnter={() => {
                                        sethovered("")
                                    }}
                                    className="items-info"><a href="" className={"items-info main-menu-items"}>Careers</a></li>
                                <Button text="Contact Us" />
                            </ul>

                        </div>
                    </div>
                </div>
                <div

                    className="mega-menu-cover" style={{ height: `${menuHeight}px`, transition: 'height 0.2s ease' }}></div>
            </div>
        </div>
    );
}

