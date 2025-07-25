import React from "react";
import { Card, CardBody, Button, Image } from "@heroui/react";
import { Icon } from "@iconify/react";

function Feedback() {
  return (
    <section>
      <div className="container mx-auto px-4 py-12 ">
        <Card
          shadow="none"
          isPressable
          className="flex flex-col md:flex-row overflow-hidden bg-neutral-100 transition-all duration-250 ease-in-out">
          <CardBody className="flex-1 p-8 flex justify-center items-center">
            <h2 className="text-2xl font-bold mb-4">
              MyFeedback for Business has resources to help you plan, start,
              grow, and advertise your small business
            </h2>
            <p className="text-default-500 mb-6">
              The lorem ipsum is in printing, a series of meaningless words used
              temporarily to calibrate a layout.
            </p>
            <Button
              radius="full"
              className="bg-black text-white hover:scale-105">
              Explore MyFeedback business
            </Button>
          </CardBody>
          <div className="flex-1 m-8 xl:m-16  ">
            <Image
              removeWrapper
              alt="Business interior"
              className="w-full h-full bg-center bg-contain object-cover"
              src="./feedback.png"
            />
          </div>
        </Card>
      </div>
    </section>
  );
}

export default Feedback;
