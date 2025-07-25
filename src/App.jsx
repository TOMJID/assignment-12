import Navbar from "./components/Navbar";
import SubNav from "./components/SubNav";
import Feedback from "./components/sections/feedback";
import HeroCarousel from "./components/sections/hero";
import RestaurantList from "./components/sections/restaurantCard";

function App() {
  return (
    <>
      <Navbar />
      <SubNav />
      <HeroCarousel />
      <RestaurantList />
      <Feedback />
    </>
  );
}

export default App;
