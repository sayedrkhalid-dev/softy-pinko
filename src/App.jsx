import { links } from "../public/data/links";
import { stats } from "../public/data/stats";
import { services } from "../public/data/services";
import { workflow } from "../public/data/workflow";
import { about } from "../public/data/about";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import Workflow from "./components/Wrokflow/Workflow";
import About from "./components/About/About";

const App = () => {
  return (
    <>
      <Navbar items={links} />
      <Banner stats={stats} />
      <Services services={services} />
      <Workflow workflow={workflow} />
      <About about={about} />
    </>
  );
};

export default App;
