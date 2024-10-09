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






















import { clear } from "@testing-library/user-event/dist/clear";
import Button from "./Button";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menuHeight, setMenuHeight] = useState(0);
    const NavRef = useRef(null)

   


    const showMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };



    return (
        <>
            <div className="custom-nav-container" ref={NavRef} >
                <div className="nav-container">
                    <div className={"nav-menu-lunate " + (isMenuOpen ? "mobile-nav-menu-lunate" : "")}>
                        <div className={"logo-menubtn " + (isMenuOpen ? 'nav-menu-mobile-logo-color' : "")}>
                            <div className="lunate-logo">LUNATE</div>
                            <div onClick={showMenu} className={"hamburger-container " + (isMenuOpen ? 'hamburger-mobile-color' : "")}>
                                <div className={"hamburger-nav1 ham " + (isMenuOpen ? 'hamburger-mobile-color-ham' : "")}></div>
                                <div className={"hamburger-nav2 ham " + (isMenuOpen ? 'hamburger-mobile-color-ham' : "")}></div>
                                <div className={"hamburger-nav3 ham " + (isMenuOpen ? 'hamburger-mobile-color-ham' : "")}></div>
                            </div>
                        </div>
                        <ul className={"nav-items " + (isMenuOpen ? "nav-items-mobile-responsive" : "")}>
                            <li className="items-info droppable aboutlunate"

                            >

                                <a href="#" className="items-info main-menu-items">About Lunate
                                    <svg className="about-drop-arrow" width="24" height="24" viewBox="0 0 24 24" fill="transparent" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 9L12 15L18 9" stroke="currentColor" />
                                    </svg>
                                </a>




                            </li>
                            <li className="items-info droppable ourapproachdrop">
                                <a href="" className="items-info main-menu-items">Our Approach
                                    <svg className="about-drop-arrow" width="24" height="24" viewBox="0 0 24 24" fill="transparent" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 9L12 15L18 9" stroke="currentColor" />
                                    </svg>
                                </a>
                            </li>
                            <li className="items-info"><a href="" className="items-info main-menu-items">News & Insights</a></li>
                            <li className="items-info"><a href="" className="items-info main-menu-items">Careers</a></li>
                            <Button text="Contact Us" />
                        </ul>
                    </div>
                </div>
            </div>
            <div

                className="mega-menu-cover" style={{ height: `${menuHeight}px`, transition: 'height 0.2s ease' }}></div>
        </>
    );
}
