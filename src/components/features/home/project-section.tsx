import Portfolio from "@/assets/portfolio.png";
import Dulche from "@/assets/dulcake.png";
import Eval from "@/assets/eval.png";

export function ProjectSection() {
  const favoriteApps = [
    {
      image: Dulche,
      title: "Dulche",
      subtitle: "Coffee Website",
      features: [
        "User-friendly Design",
        "Interactive UI",
        "Built using HTML & CSS",
      ],
    },
    {
      image: Eval,
      title: "Evaluation System",
      subtitle: "Project-101",
      features: [
        "Responsive Design",
        "NextJS + TypeScript",
        "Laravel",
        "Tailwind CSS",
      ],
    },
    {
      image: Portfolio,
      title: "New Portfolio",
      subtitle: "Lesggo",
      features: [
        "Responsive Design",
        "ReactJS + Tailwind CSS",
        "Interactive UI",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Recent Projects
          </h2>

          <p className="mt-4 text-lg text-slate-600 dark:text-gray-400">
            School Projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {favoriteApps.map((app, index) => (
            <div key={index} className="mb-16">
              <div className="group aspect-square overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/5">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
              </div>

              <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
                {app.title}
              </h3>

              <p className="mt-2 text-sm text-slate-500 dark:text-gray-400">
                {app.subtitle}
              </p>

              <ul className="mt-4 space-y-3">
                {app.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg
                      className="h-5 w-5 text-blue-500 dark:text-blue-400 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>

                    <span className="text-sm text-slate-600 dark:text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
