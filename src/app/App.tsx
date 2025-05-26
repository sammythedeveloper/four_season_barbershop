// App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Collection } from "@/sections/Collection";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Landing } from "@/sections/Landing";
import { Service } from "@/sections/Service";
import ThankYou from "@/app/Services/Thankyou"; // Create this page next

function HomePage() {
  return (
    <>
      <Header />
      <Landing />
      <Service />
      <Collection />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}

export default App;
