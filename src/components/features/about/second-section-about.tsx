import { Card } from "@/components/ui/card";

export function SecondSectionAbout() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="mb-12 text-4xl font-bold text-white">Education</h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card
            title="Bachelor of Science in Information Technology"
            subtitle="Cordova Public College"
            period="2023- Present"
            description="Focused on software engineering, web development, and computer systems."
            variant="education"
          />

          <Card
            title="Senior High School"
            subtitle="Babang National High School"
            period="2020 - 2022"
            description="Senior High School helped me prepare for the next chapter of my education by developing my skills, confidence, and interests while gaining a clearer direction for my future career."
            variant="education"
          />

          <Card
            title="Junior High School"
            subtitle="Babang National High School"
            period="2018 - 2020"
            description="Junior High School was a period of growth and exploration. I strengthened my academic foundation, developed new interests, and learned the importance of discipline, teamwork, and perseverance."
            variant="education"
          />

          <Card
            title="Elementary"
            subtitle="Cogon Elementary School"
            period="2012 - 2018"
            description="My elementary years were the foundation of my learning journey, where I developed essential academic skills, curiosity, and a love for discovering new things."
            variant="education"
          />
        </div>
      </div>
    </section>
  );
}
