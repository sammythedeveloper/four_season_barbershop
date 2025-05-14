import { Collection } from "@/sections/Collection";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Landing } from "@/sections/Landing";
import { Service } from "@/sections/Service";


function App() {
  return (
    <div>
      <Header/>
      <Landing />
      <Service />
      <Collection />
      <Footer /> 
    </div>
  );
}

export default App;
