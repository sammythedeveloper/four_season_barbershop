import { Braids } from "@/sections/Services/Braids";
import { Cosmetics } from "@/sections/Services/Cosmetics";
import { HairCut } from "@/sections/Services/HairCut";
import { Shave } from "@/sections/Services/Shave";
import { SlikPress } from "@/sections/Services/SilkPress";
import { Vip } from "@/sections/Services/Vip";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/HairCut" element={<HairCut />} />
        <Route path="/Shave" element={<Shave />} />
        <Route path="/SlikPress" element={<SlikPress />} />
        <Route path="/Vip" element={<Vip />} />
        <Route path="/Braids" element={<Braids />} />
        <Route path="/Cosmetics" element={<Cosmetics />} />
      </Routes>
    </Router>
  );
}

export default App;
