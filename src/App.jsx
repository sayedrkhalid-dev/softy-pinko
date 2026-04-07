import { links } from "../public/data/links";
import { banner_stats, about_stats, highlights } from "../public/data/stats";
import { services } from "../public/data/services";
import { workflow } from "../public/data/workflow";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import Workflow from "./components/Wrokflow/Workflow";
import About from "./components/About/About";

const App = () => {
  return (
    <>
      <Navbar items={links} />
      <Banner stats={banner_stats} />
      <About stats={about_stats} highlights={highlights} />
      <Workflow workflow={workflow} />
      <Services services={services} />
    </>
  );
};

export default App;
