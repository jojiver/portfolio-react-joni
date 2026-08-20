import { useState } from "react";
import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <NavLink
            to="/"
            onClick={closeMenu}
            className="text-2xl font-bold tracking-wider text-white"
          >
            JONIVER
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <NavLink
            to="/"
            className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
          >
            About
          </NavLink>

          <NavLink
            to="/service"
            className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
          >
            Projects
          </NavLink>

          <NavLink to="/contact">
            <Button variant="secondary">Contact</Button>
          </NavLink>
        </nav>

        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              isMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />

          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              isMenuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`border-t border-white/10 bg-black/95 md:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <nav className="flex flex-col px-6 py-4">
          <NavLink
            to="/"
            onClick={closeMenu}
            className="border-b border-white/10 py-4 text-sm font-medium text-gray-300 hover:text-white"
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={closeMenu}
            className="border-b border-white/10 py-4 text-sm font-medium text-gray-300 hover:text-white"
          >
            About
          </NavLink>

          <NavLink
            to="/service"
            onClick={closeMenu}
            className="border-b border-white/10 py-4 text-sm font-medium text-gray-300 hover:text-white"
          >
            Projects
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu} className="py-4">
            <Button variant="secondary" className="w-full">
              Contact
            </Button>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
