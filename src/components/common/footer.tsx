import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-white/10 dark:bg-[#050505]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
              Let's Build Something Amazing Together
            </h2>

            <nav className="mt-4 flex gap-5 text-sm">
              <NavLink
                to="/"
                className="text-slate-500 transition-colors hover:text-slate-900 dark:text-gray-400 dark:hover:text-white"
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                className="text-slate-500 transition-colors hover:text-slate-900 dark:text-gray-400 dark:hover:text-white"
              >
                About
              </NavLink>

              <NavLink
                to="/project"
                className="text-slate-500 transition-colors hover:text-slate-900 dark:text-gray-400 dark:hover:text-white"
              >
                Projects
              </NavLink>

              <NavLink
                to="/contact"
                className="text-slate-500 transition-colors hover:text-slate-900 dark:text-gray-400 dark:hover:text-white"
              >
                Contact
              </NavLink>
            </nav>
          </div>

          {/* Right Side */}
          <NavLink to="/contact">
            <Button variant="secondary">
              Get in touch
            </Button>
          </NavLink>
        </div>

        {/* Bottom Footer */}
        <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm md:flex-row md:items-center md:justify-between dark:border-white/10">
          <p className="text-slate-500 dark:text-gray-500">
            © 2026 Joniver. All rights reserved.
          </p>

          <div className="flex gap-5">
            <span className="text-slate-500 dark:text-gray-500">
              Privacy Policy
            </span>

            <span className="text-slate-500 dark:text-gray-500">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
