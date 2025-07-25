import { Button, Card, CardBody, CardFooter, Image } from "@heroui/react";
import { IoMdStar } from "react-icons/io";
import restaurants from "../../data/restaurants";

function RestaurantList() {
  return (
    <section>
      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-bold mb-6 text-center md:text-start ">
          The latest trends
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {restaurants.map((restaurant) => (
            <Card isPressable key={restaurant.id} className="max-w-sm mx-auto">
              <CardBody className="p-0">
                <Image
                  loading="lazy"
                  removeWrapper
                  radius="none"
                  alt={restaurant.name}
                  className="w-full object-cover h-48"
                  src={restaurant.image}
                />
              </CardBody>
              <CardFooter className="flex flex-col items-start">
                <h5 className="text-lg font-semibold">{restaurant.name}</h5>
                <p className="text-sm text-gray-500 mt-1">
                  {restaurant.description}
                </p>
                <div className="flex items-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <IoMdStar
                      key={i}
                      className={`w-4 h-4  mx-[.5px] ${
                        i < Math.floor(restaurant.rating)
                          ? "text-yellow-400 bg-orange-400"
                          : "text-white bg-gray-400"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600 flex">
                    <p className="font-bold mr-1">{restaurant.rating}</p> (
                    {restaurant.reviews} reviews)
                  </span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      {/* discover more btn */}
      <div>
        <h3 className="text-center mb-4 text-xl">
          Discover More cool restaurants
        </h3>
        <Button
          radius="full"
          className="block mx-auto px-8 text-white bg-sky-600 mb-16">
          Show More
        </Button>
      </div>
    </section>
  );
}

export default RestaurantList;
