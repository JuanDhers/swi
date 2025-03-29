import React, { useState } from "react";
import { Link } from "react-router-dom"; // Asegúrate de usar React Router
import logo from "../assets/icons/Spanish_with_Ines_icon.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

// Definir las props de NavbarLinks
interface NavbarLinksProps {
  isMobile: boolean;
}

// Navbar links component
const NavbarLinks: React.FC<NavbarLinksProps> = ({ isMobile }) => (
  <ul className={`${isMobile ? "text-start text-xl p-2" : "flex gap-8 text-[18px]"}`}>
    {["home", "about", "contact"].map((section) => (
      <li
        key={section}
        className="text-zinc-800 hover:text-zinc-900 transition hover:font-bold cursor-pointer box-border"
      >
        {/* Aquí utilizamos react-router-dom Link */}
        <Link to={section == "home" ? ``:`/${section}` }>{section.charAt(0).toUpperCase() + section.slice(1)}</Link>
      </li>
    ))}
  </ul>
);

export const Navbar: React.FC = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <nav className="w-full bg-yellow-200 shadow-lg">
      <div className="h-10vh flex items-center justify-between px-4 lg:px-20 py-1">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="w-14">
            <img src={logo} alt="Logo Spanish with Ínes" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center justify-end flex-1">
          <NavbarLinks isMobile={false} />
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="lg:hidden block transition"
          onClick={handleClick}
          aria-label="Toggle menu"
        >
          {click ? <IoMdClose /> : <RxHamburgerMenu />}
        </button>

        {/* Mobile Menu */}
        {click && (
          <div className="lg:hidden absolute top-14 left-0 right-0 bg-yellow-200 transition">
            <NavbarLinks isMobile={true} />
          </div>
        )}
      </div>
    </nav>
  );
};
