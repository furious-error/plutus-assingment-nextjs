import { Capabilities } from "./ui/capabilities";
import { Clients } from "./ui/clients";
import { Features } from "./ui/features";
import { Footer } from "./ui/footer";
import { Header } from "./ui/header";
import { Hero } from "./ui/hero";
import { Partners } from "./ui/partners";
import { Pricing } from "./ui/pricing";
import { Waitlist } from "./ui/waitlist";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="relative">
        <Header />
        <main className="mx-auto flex flex-col gap-24  pb-32 pt-20 lg:pt-28">
          <Hero />
          <Partners />
          <Features />
          <Capabilities />
          <Clients />
          <Pricing />
          <Waitlist />
        </main>
        <Footer />
      </div>
    </div>
  );
}
