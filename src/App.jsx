import { NAV_ITEMS } from "../public/data/nav_items";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar items={NAV_ITEMS} />
    </>
  );
};

export default App;
