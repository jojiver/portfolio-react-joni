import Profile from "@/assets/Profile.png";
export function ProfileSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Hi, Im Joniver Sumalinog
            </h2>
            <h3 className="text-xl text-gray-600 dark:text-gray-400 mb-6">
              A frontend developer
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
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
                {" "}
                My goal is to become a full-stack developer and build software
                that solves real-world problems.
              </p>
              <p className="font-bold text-blue-600">
                Reference---https://www.hashirshoaeb.com/
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="w-80 h-96 rounded-2xl overflow-hidden border border-white/10">
              <img
                src={Profile}
                title="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
