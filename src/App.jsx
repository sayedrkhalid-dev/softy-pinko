import { links } from "../public/data/links";
import { banner_stats, about_stats, highlights } from "../public/data/stats";
import { services } from "../public/data/services";
import { workflow } from "../public/data/workflow";
import { pricing } from "../public/data/pricing";
import { contacts } from "../public/data/contact";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import Workflow from "./components/Wrokflow/Workflow";
import About from "./components/About/About";
import Pricing from "./components/Pricing/Pricing";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <>
      <Navbar items={links} />
      <Banner stats={banner_stats} />
      <About stats={about_stats} highlights={highlights} />
      <Workflow workflow={workflow} />
      <Services services={services} />
      <Pricing pricing={pricing} />
      <Contact contacts={contacts} />
    </>
  );
};

export default App;
