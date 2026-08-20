import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-white">
              Let's Build Something Amazing Together
            </h2>

            <nav className="mt-4 flex gap-5 text-sm">
              <NavLink
                to="/"
                className="text-gray-400 transition-colors hover:text-white"
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                className="text-gray-400 transition-colors hover:text-white"
              >
                About
              </NavLink>

              <NavLink
                to="/project"
                className="text-gray-400 transition-colors hover:text-white"
              >
                Projects
              </NavLink>

              <NavLink
                to="/contact"
                className="text-gray-400 transition-colors hover:text-white"
              >
                Contact
              </NavLink>
            </nav>
          </div>

          {/* Right Side */}
          <NavLink to="/contact">
            <Button
            variant="secondary"
            className="text-white"
            >Get in touch</Button>
          </NavLink>
        </div>

        {/* Bottom Footer */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm md:flex-row md:items-center md:justify-between">
          <p className="text-gray-500">© 2026 Joniver. All rights reserved.</p>

          <div className="flex gap-5">
            <span className="text-gray-500">Privacy Policy</span>

            <span className="text-gray-500">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
