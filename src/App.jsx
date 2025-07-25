import Navbar from "./components/Navbar";
import SubNav from "./components/SubNav";
import RestaurantMap from "./components/pages/restaurants";
import Activities from "./components/sections/activities";
import Feedback from "./components/sections/feedback";
import Footer from "./components/sections/footer";
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
      <Activities />

      <RestaurantMap />
      
      <Footer />
    </>
  );
}

export default App;
