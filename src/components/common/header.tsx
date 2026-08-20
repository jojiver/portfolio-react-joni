import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full border-b border-white/10 bg-black/70 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 p-x6 lg:px-8">
      
          {/* Logo / Brand */}
          <div className="flex items-center">
            <NavLink to="/" className="text-2xl font-bold text-white tracking-wider">
                JONIVER
            </NavLink>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Home</NavLink>
            <NavLink to="/about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">About</NavLink>
            <NavLink to="/service" className="text-sm font-medium text-gray-300 hover:text-gray-white transition-colors">Projects</NavLink>
            {/* Contact Button */}
            <NavLink to="/contact">
              <Button variant="secondary">Contact</Button>
            </NavLink>
          </nav>
        </div>
      
    </header>
  );
}