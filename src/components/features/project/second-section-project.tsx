import Dulche from "@/assets/dulcake.png";
import Eval from "@/assets/eval.png";
import Portfolio from "@/assets/Profile.png";

import { Card } from "@/components/ui/card";

export function SecondSectionProject() {
  const projects = [
    {
      image: Dulche,
      title: "Dulche",
      subtitle: "Coffee Website",
      description:
        "A modern coffee website designed with HTML & CSS",
      features: [
        "User-friendly Design",
        "Interactive UI",
        "Built using HTML & CSS",
      ],
    },
    {
      image: Eval,
      title: "Evaluation System",
      subtitle: "School Project",
      description:
        "A web-based evaluation system created as part of a school project.",
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
      subtitle: "Personal Project",
      description:
        "A personal portfolio website created to showcase my frontend development skills.",
      features: ["Responsive Design", "ReactJS", "Tailwind CSS"],
    },
  ];

  return (
    <section className="bg-[#050505] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
           My Recent Projects
          </h2>

          <p className="mt-4 text-lg text-gray-400">
            PPAP
          </p>
        </div>

        <div className="space-y-16 md:space-y-24">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              image={project.image}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              features={project.features}
              variant="project"
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
