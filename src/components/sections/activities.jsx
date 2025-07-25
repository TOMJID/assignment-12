import { Card, CardBody, Avatar, Button } from "@heroui/react";
import { IoMdStar } from "react-icons/io";
import activities from "../../data/activities";

const ActivityCard = ({ activity }) => {
  return (
    <Card shadow="none" isPressable className="w-full bg-neutral-100">
      <CardBody className="p-4 ">
        <div className="flex items-center mb-4">
          <Avatar src={activity.user.avatar} className="mr-4" />
          <div>
            <h3 className="text-sm font-semibold">{activity.user.name}</h3>
            <p className="text-xs text-gray-500">{activity.user.location}</p>
          </div>
        </div>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, index) => (
            <IoMdStar
              key={index}
              className={`w-4 h-4  mx-[.5px] ${
                index < activity.rating
                  ? "text-white bg-orange-400"
                  : ""
              }`}
            />
          ))}
          <span className="ml-2 text-xs text-gray-500">{activity.date}</span>
        </div>
        <p className="text-sm mb-4 line-clamp-3">{activity.description}</p>
        <p className="text-sm mb-4 line-clamp-3">
          Lorem ipsum dolor sit amet consect
        </p>
        <div className="flex space-x-2 mb-4 justify-evenly">
          {activity.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Activity ${index + 1}`}
              className="w-22 h-20 object-cover rounded-md"
            />
          ))}
        </div>
        <a href="#" className="underline">
          Discover
        </a>
      </CardBody>
    </Card>
  );
};
function Activities() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Recent activities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  );
}

export default Activities;
