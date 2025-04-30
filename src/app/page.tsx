import { AboutSection } from "@/sections/About";
import { Collection } from "@/sections/Collection";
import { Header } from "@/sections/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <AboutSection />
      <Collection/>
    </div>
  );
}
