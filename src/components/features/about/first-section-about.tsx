
import Profile from "@/assets/Profile.png";


export function FirstSectionAbout() {
  return (
    <section className="py-16 md:py-24">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      <div className="order-2 lg:order-1">
        <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
          Hi, I'm Joniver Sumalinog
        </h2>

        <h3 className="mb-6 text-xl text-slate-600 dark:text-gray-400">
          A frontend developer
        </h3>

        <div className="space-y-4 text-slate-600 dark:text-gray-400">
          <p>
            I enjoy creating modern, responsive, and user-friendly web
            applications using React, TypeScript, Tailwind CSS, and Laravel.
          </p>

          <p>
            I'm continuously improving my skills by building personal
            projects and recreating professional websites to learn modern UI
            design and frontend development.
          </p>

          <p>
            My goal is to become a full-stack developer and build software
            that solves real-world problems.
          </p>
        </div>
      </div>

      <div className="order-1 lg:order-2 flex justify-center">
        <div className="h-96 w-80 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/5">
          <img
            src={Profile}
            alt="Joniver Sumalinog"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </div>
  </div>
</section>
  );
}
