import { Card, CardBody, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

const categories = [
  { name: "Restaurants", icon: "lucide:utensils" },
  { name: "Hotels", icon: "lucide:hotel" },
  { name: "Home services", icon: "lucide:home" },
  { name: "Shopping", icon: "lucide:shopping-bag" },
  { name: "Car location", icon: "lucide:car" },
  { name: "Beauty & Spa", icon: "lucide:scissors" },
  { name: "Park", icon: "streamline-cyber:park" },
  { name: "Museum", icon: "lucide:landmark" },
  { name: "Car wash", icon: "lucide:droplets" },
  { name: "Bars", icon: "lucide:glass-water" },
  { name: "Gyms", icon: "lucide:dumbbell" },
];

function SubNav() {
  return (
    <Card shadow="none" className="bg-content1 mt-20 container mx-auto">
      <CardBody className="overflow-x-auto flex justify-center items-center gap-4 px-4">
        <div className="flex gap-0.5 py-2">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant="light"
              className="flex-col min-w-[80px] h-auto py-2 text-gray-500 hover:text-sky-600">
              <Icon icon={category.icon} className="text-2xl mb-1" />
              <span className="text-xs whitespace-nowrap">{category.name}</span>
            </Button>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}

export default SubNav;
