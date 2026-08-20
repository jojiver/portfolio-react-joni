import { Card }  from "@/components/ui/card";



export function CardDataSection(){

return(

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
)

}