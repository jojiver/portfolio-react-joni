import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router";
import { favoriteApps } from "@/data/favoriteApp";
import  Profile  from "@/assets/Profile.png";

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[180px]" />
          <div className="absolute bottom-20 right-1/4 h-[350px] w-[350px] rounded-full bg-emerald-500/10 blur-[180px]" />
        </div>

        <div className="relative mx-auto max-w-4xl py-5 text-center">
          <section className="min-h-screen flex items-center justify-center px-6">
            <div className="max-w-4xl">
              <p className="mb-8 text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
                Frontend Developer
              </p>

              <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
                I build modern React
                <br />
                applications that grow
                <br />
                your business.
              </h1>

              <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
                Building fast, responsive, and scalable web applications using
                React, Typescript, Tailwind CSS, and Laravel.
              </p>

              <div className="mt-5 flex justify-center gap-5 text-sm text-gray-300">
                <span>• React</span>
                <span>• TypeScript</span>
                <span>• Tailwind CSS</span>
              </div>

              <div className="mt-12">
                <NavLink to="/contact">
                  <Button variant="secondary">Contact Me</Button>
                </NavLink>
              </div>
            </div>
          </section>
        </div>

        <section className="py-20 bg-[#0B1120]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white">What I Can Help</h2>

              <p className="mt-4 text-gray-400">
                Here are some projects I've built.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card
                title="DULCHE CAFE"
                subtitle="We Use HTML & CSS"
                description=""
                features={["HTML", "CSS", "Responsive Design"]}
                buttonLabel="View Project"
                buttonVariant="secondary"
              />

              <Card
                title="Evaluation System"
                description=""
                subtitle="We Use NextJS & Laravel"
                features={["Tailwind CSS", "PHP", "MySQL"]}
                buttonLabel="View Project"
                buttonVariant="secondary"
              />

              <Card
                title="New Portfolio"
                description=""
                subtitle="I use ReactJS"
                features={["Tailwind CSS", "Router", "Javascript"]}
                buttonLabel="View Project"
                buttonVariant="secondary"
              />
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                My Favorite Apps
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Lorem Ipsum.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {favoriteApps.map((app, index) => (
                <div key={index} className="mb-16">
                  <div className="group aspect-square overflow-hidden rounded-xl border border-gray-600">
                    <img
                      src={app.image}
                      alt={app.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-white">
                    {app.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-400">{app.subtitle}</p>

                  <ul className="mt-4 space-y-3">
                    {app.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <svg
                          className="h-5 w-5 text-blue-400 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}  d="M5 13l4 4L19 7"/>
                        </svg>

                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Hi, Im Joniver Sumalinog</h2>
            <h3 className="text-xl text-gray-600 dark:text-gray-400 mb-6">A frontend developer</h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>I enjoy creating modern, responsive, and user-friendly web
               applications using React, TypeScript, Tailwind CSS, and Laravel.</p>
            <p>
              I'm continuously improving my skills by building personal
            projects and recreating professional websites to learn modern UI
            design and frontend development.
            </p>
            <p> My goal is to become a full-stack developer and build software
                     that solves real-world problems.</p>
                     <p className="font-bold text-blue-600">Reference---https://www.hashirshoaeb.com/</p>
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
      </main>

      <Footer />
    </>
  );
}
