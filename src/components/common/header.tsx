import { useState } from "react";
import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { Menu, X } from "lucide-react";
import { Section } from "@/components/common/Section"

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/project" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const getLinkClass = (isActive: boolean) => {
    if(isActive){
      return "text-white underline underline-offset-4"
    }else{
      return "text-gray-400 hover:text-white";
    }
  }

  return (
    <header className="bg-[#050505] border-b sticky top-0 z-50">
      {/* Backdrop overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/40 transition-opacity duration-300 md:hidden z-40",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={toggleMenu}
      />

      <Section className="py-0" containerClassName="relative z-50  bg-[#050505]">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-xl font-bold text-white" onClick={toggleMenu}>
              MyFirstApp
            </NavLink>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="absolute left-[680px] hidden -translate-x-1/2 md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => cn("text-sm font-medium transition-colors", getLinkClass(isActive))}
              >
                {item.label}
              </NavLink>
            ))}

            {/* Contact Button */}
            <NavLink to="/contact">
              <Button
                 variant="secondary"
                 className="border border-white/20 bg-white text-white hover:bg-gray-200">
                  Contact
                 </Button>

            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </Section>

      {/* Mobile Menu Panel */}
      <div
        className={cn(
          "md:hidden border-t border-gray-200 bg-white transition-all duration-300 ease-in-out grid overflow-hidden absolute top-16 left-0 right-0 border-b shadow-lg z-50",
          isMenuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"
        )}
      >
        <div className="overflow-hidden">
          <div className="px-4 pt-2 pb-4 space-y-2 flex flex-col">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => cn("text-sm font-medium py-2 transition-colors", getLinkClass(isActive))}
                onClick={toggleMenu}
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pt-2 border-t border-gray-100">
              <NavLink to="/contact" onClick={toggleMenu} className="inline-block w-full">
                <Button className="w-full">Contact</Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}