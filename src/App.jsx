import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavScrollExample from "./Components/NavbaarCom";
import DestinationScren from "./Screen/DestinosScren/DestinosScren";
import HomeSreen from "./Screen/Homes/Home";
import PageSreen from "./Screen/PagesScreen/PageScrerns";
import AboutScreen from "./Screen/AboutUS/aboutus";
import BlogSecreens from "./Screen/BLOGScren/Blogscrenn";
import SingEmail from "./Section/SingnEmals/singnemal";
import FooterSection from "./Section/FOOTERSection/FooterSection";
import ContactCard from "./Section/ContactSection/Contacts";

function App() {
  return (
    <>
      <NavScrollExample />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeSreen />} />
          <Route path="/destinatons" element={<DestinationScren />} />
          <Route path="/pagese" element={<PageSreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/blog" element={<BlogSecreens />} />
          <Route path="/contact" element={<ContactCard />} />
        </Routes>
        <SingEmail />
        <FooterSection />
      </BrowserRouter>
    </>
  );
}

export default App;
