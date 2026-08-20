import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { Card } from "@/components/ui/card";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          <Card title="Card Title 1" description="This is the card description 1" buttonLabel="Click Me" buttonVariant="primary" />
          <Card title="Card Title 2" description="This is the card description 2" buttonLabel="Click Me" buttonVariant="secondary" />
          <Card title="Card Title 3" description="This is the card description 3" buttonLabel="Click Me" buttonVariant="tertiary" />
        </section>
      </main>
      <Footer />
    </>
  )
}