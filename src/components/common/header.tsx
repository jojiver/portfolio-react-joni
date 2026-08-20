import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { Menu, X, Sun, Moon } from "lucide-react";
import logo from "@/assets/logo.png"
import { Section } from "@/components/common/Section";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/project" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") !== "light";
  });

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const getLinkClass = (isActive: boolean) => {
    if (isActive) {
      return "text-gray-900 dark:text-white underline underline-offset-4";
    }

    return "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white";
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white dark:border-white/10 dark:bg-[#050505]">
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 md:hidden",
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
        onClick={toggleMenu}
      />

      <Section
        className="py-0"
        containerClassName="relative z-50 bg-white dark:bg-[#050505]"
      >
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <NavLink
              to="/"
              className="text-xl font-bold text-gray-900 dark:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <img src={logo}
                alt="logo"
                className="h-8 w-auto"/>
            </NavLink>
          </div>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "text-sm font-medium transition-colors",
                    getLinkClass(isActive),
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}

            <button
              type="button"
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-gray-700 transition hover:bg-gray-200 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>

            <NavLink to="/contact">
              <Button variant="secondary">Contact</Button>
            </NavLink>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-gray-700 transition hover:bg-gray-200 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>

            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
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

      <div
        className={cn(
          "absolute left-0 right-0 top-16 z-50 grid overflow-hidden border-b border-gray-200 bg-white shadow-lg transition-all duration-300 ease-in-out dark:border-white/10 dark:bg-[#050505] md:hidden",
          isMenuOpen
            ? "grid-rows-[1fr] opacity-100"
            : "pointer-events-none grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col space-y-2 px-4 pb-4 pt-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "py-2 text-sm font-medium transition-colors",
                    getLinkClass(isActive),
                  )
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}

            <div className="border-t border-gray-200 pt-2 dark:border-white/10">
              <NavLink
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="inline-block w-full"
              >
                <Button variant="secondary" className="w-full">
                  Contact
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
