import { Landing } from "@/sections/Landing";
import { Collection } from "@/sections/Collection";
import { Header } from "@/sections/Header";
import { Service } from "@/sections/Service";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Landing />
      <Collection />
      <Service />
      <Footer/>
    </div>
  );
}
