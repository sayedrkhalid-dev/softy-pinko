import { links } from "../public/data/links";
import { stats } from "../public/data/stats";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar items={links} />
      <Banner stats={stats} />
    </>
  );
};

export default App;
