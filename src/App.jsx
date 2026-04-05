import { NAV_ITEMS } from "../public/data/nav_items";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar items={NAV_ITEMS} />
      <Banner />
    </>
  );
};

export default App;
