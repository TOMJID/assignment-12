import React from "react";
import { Card, CardBody, CardFooter, Image, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { IoMdStar } from "react-icons/io";

const restaurants = [
  {
    id: 1,
    name: "Bottega",
    description:
      "The lorem ipsum is, in printing, a placeholder text commonly used to demonstrate .",
    rating: 5.0,
    reviews: 876,
    image: "/card1.png",
  },
  {
    id: 2,
    name: "La Trattoria",
    description:
      "The lorem ipsum is, in printing, a placeholder text commonly used to demonstrate .",
    rating: 4.1,
    reviews: 654,
    image: "/card2.png",
  },
  {
    id: 3,
    name: "Sushi Zen",
    description:
      "The lorem ipsum is, in printing, a placeholder text commonly used to demonstrate .",
    rating: 4.2,
    reviews: 789,
    image: "/card3.png",
  },
  {
    id: 4,
    name: "The Grill House",
    description:
      "The lorem ipsum is, in printing, a placeholder text commonly used to demonstrate .",
    rating: 4.5,
    reviews: 543,
    image: "/card4.png",
  },
];

function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(1);
  const [totalSlides, setTotalSlides] = React.useState(restaurants.length);
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 768) {
        // md breakpoint
        setIsDesktop(true);
        setItemsPerPage(4);
        setTotalSlides(1);
      } else {
        setIsDesktop(false);
        if (screenWidth >= 640) {
          // sm breakpoint
          setItemsPerPage(2);
          setTotalSlides(Math.ceil(restaurants.length / 2));
        } else {
          setItemsPerPage(1);
          setTotalSlides(restaurants.length);
        }
      }
      setCurrentIndex(0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (isDesktop) return;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    if (isDesktop) return;
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="container mx-auto py-8">
      <div className="relative bg-sky-600 py-6 px-4 rounded-2xl shadow-lg">
        <h1 className="text-white text-2xl mb-4 mt-2 text-balance">
          Find the best restaurants ratings below
        </h1>
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${isDesktop ? 0 : currentIndex * 100}%)`,
            }}>
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div
                key={slideIndex}
                className="w-full flex-shrink-0 grid gap-4"
                style={{
                  gridTemplateColumns: `repeat(${itemsPerPage}, 1fr)`,
                }}>
                {restaurants
                  .slice(
                    slideIndex * itemsPerPage,
                    slideIndex * itemsPerPage + itemsPerPage
                  )
                  .map((restaurant) => (
                    <Card isPressable key={restaurant.id} className="w-full">
                      <CardBody className="p-0">
                        <Image
                          removeWrapper
                          radius="none"
                          alt={restaurant.name}
                          className="w-full object-cover h-64"
                          src={restaurant.image}
                        />
                      </CardBody>
                      <CardFooter className="flex flex-col items-start">
                        <h5 className="text-lg font-semibold">
                          {restaurant.name}
                        </h5>
                        <p className="text-small text-start text-default-500">
                          {restaurant.description}
                        </p>
                        <div className="flex items-center mt-2">
                          {[...Array(5)].map((_, i) => (
                            <IoMdStar
                              key={i}
                              className={`w-4 h-4 bg-orange-400 mx-[.5px] ${
                                i < Math.floor(restaurant.rating)
                                  ? "text-yellow-400"
                                  : "text-white"
                              }`}
                            />
                          ))}
                          <span className="ml-2 text-small font-semibold">
                            {restaurant.rating.toFixed(1)}
                          </span>
                          <span className="ml-2 text-small text-default-500">
                            ({restaurant.reviews} reviews)
                          </span>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            ))}
          </div>
        </div>
        {!isDesktop && (
          <>
            <Button
              isIconOnly
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/80"
              onPress={prevSlide}>
              <Icon icon="lucide:chevron-left" className="w-6 h-6" />
            </Button>
            <Button
              isIconOnly
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/80"
              onPress={nextSlide}>
              <Icon icon="lucide:chevron-right" className="w-6 h-6" />
            </Button>
          </>
        )}
      </div>
    </section>
  );
}

export default HeroCarousel;
