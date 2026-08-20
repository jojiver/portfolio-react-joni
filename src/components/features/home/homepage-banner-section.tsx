import { Button } from "@/components/ui/button";
import { NavLink } from "react-router";

export function HomePageBannerSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-4xl text-center">
        <p className="mb-8 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">
          Frontend Developer
        </p>

        <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-slate-900 md:text-7xl dark:text-white">
          I build modern React
          <br />
          applications that grow
          <br />
          your business.
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600 dark:text-gray-400">
          Building fast, responsive, and scalable web applications using React,
          TypeScript, Tailwind CSS, and Laravel.
        </p>

        <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-slate-500 dark:text-gray-300">
          <span>• React</span>
          <span>• TypeScript</span>
          <span>• Tailwind CSS</span>
          <span>• Laravel</span>
        </div>

        <div className="mt-12">
          <NavLink to="/contact">
            <Button
              variant="secondary"
              className="inline-flex w-fit items-center px-6 py-3"
            >
              Contact Me
            </Button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}
