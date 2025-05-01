import { Landing } from "@/sections/Landing";
import { Collection } from "@/sections/Collection";
import { Header } from "@/sections/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <Landing />
      <Collection />
    </div>
  );
}
