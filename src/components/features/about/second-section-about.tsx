import { Card } from "@/components/ui/card";

export function SecondSectionAbout() {
  return (
   <section className="py-16 md:py-24">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">

    <h2 className="mb-12 text-4xl font-bold text-white">
      Education
    </h2>

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
        description="Completed my senior high school education at Babag National High School, where I gained a strong foundation in core subjects and developed essential life skills."
        variant="education"
      />

      <Card
        title="Junior High School"
        subtitle="Babang National High School"
        period="2018 - 2020"
        description="Completed my junior high school education at Babag National High School, where I gained a strong foundation in core subjects and developed essential life skills."
        variant="education"
      />

      <Card
        title="Elementary"
        subtitle="Cogon Elementary School"
        period="2012 - 2018"
        description="Completed my elementary education at Cogon Elementary School, where I gained a strong foundation in core subjects and developed essential life skills."
        variant="education"
      />

    </div>
  </div>
</section>
  );
}
