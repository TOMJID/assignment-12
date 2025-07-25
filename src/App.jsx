import { useState } from "react";
import Navbar from "./components/Navbar";
import SubNav from "./components/SubNav";
import RestaurantMap from "./components/pages/restaurants";
import Activities from "./components/sections/activities";
import Feedback from "./components/sections/feedback";
import Footer from "./components/sections/footer";
import HeroCarousel from "./components/sections/hero";
import RestaurantList from "./components/sections/restaurantCard";

function App() {
  const [showRestaurantsPage, setShowRestaurantsPage] = useState(false);

  const handleBusinessClick = () => {
    setShowRestaurantsPage(true);
  };

  return (
    <>
      <Navbar onBusinessClick={handleBusinessClick} />
      <SubNav />
      {showRestaurantsPage ? (
        <RestaurantMap />
      ) : (
        <>
          <HeroCarousel />
          <RestaurantList />
          <Feedback />
          <Activities />
        </>
      )}
      <Footer />
    </>
  );
}

export default App;
