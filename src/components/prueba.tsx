import React from "react";
import { Card, CardImage, CardHeader, CardBody, CardFooter } from "./Card/Card";
import { FiUser, FiImage, FiPlus } from "react-icons/fi";
import { BsCheckCircleFill } from "react-icons/bs";
import { Button } from "./Button";

export const Prueba: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-8">
      <Card className="relative w-full max-w-xs mx-auto rounded-2xl overflow-hidden shadow-lg mr-4">
        <div className="p-2 pt-2">
          <CardImage
            src="https://images.unsplash.com/photo-1536896407451-6e3dd976edd1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-72 object-cover rounded-2xl"
          />
        </div>

        <CardHeader className="px-4">
          <div className="flex items-center gap-2 mb-1">
            <h2 className="text-2xl font-bold text-gray-900 leading-tight">
              Daisy Wilcox
            </h2>
            <BsCheckCircleFill className="text-blue-500 text-base" />
          </div>
        </CardHeader>

        <CardBody className="px-4 text-gray-400 text-md leading-snug break-words">
          I'm a designer focused on creating engaging visual experiences.
        </CardBody>

        <CardFooter className="px-4 pb-4">
          <div className="flex flex-wrap items-center justify-between gap-6 text-sm text-gray-600 w-full">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <FiUser className="text-gray-500" />
                <span>245</span>
              </div>
              <div className="flex items-center gap-1">
                <FiImage className="text-gray-500" />
                <span>32</span>
              </div>
            </div>

            <Button
              rightIcon={<FiPlus />}
              radius="full"
              className="bg-gradient-to-r from-purple-400 to-blue-400 text-white font-semibold shadow px-4"
            >
              Follow
            </Button>
          </div>
        </CardFooter>
      </Card>

      <Card className="relative w-full max-w-xs mx-auto rounded-2xl overflow-hidden shadow-lg">
        <CardImage
          src="https://images.unsplash.com/photo-1536896407451-6e3dd976edd1?q=80&w=687&auto=format&fit=crop"
          className="w-full h-max object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent py-4 flex flex-col justify-end text-white">
          <CardHeader className="px-4">
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-2xl font-bold text-white leading-tight">
                Daisy Wilcox
              </h2>
              <BsCheckCircleFill className="text-blue-500 text-base" />
            </div>
          </CardHeader>

          <CardBody className="p-0 text-sm text-white/80 leading-tight break-words">
            I'm a designer focused on creating engaging visual experiences.
          </CardBody>

          <CardFooter className="p-0 mt-4">
            <div className="flex items-center justify-between w-full text-sm">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <FiUser className="text-white/70" />
                  <span>245</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiImage className="text-white/70" />
                  <span>32</span>
                </div>
              </div>

              <Button
                rightIcon={<FiPlus />}
                radius="full"
                className="bg-gradient-to-r from-purple-400 to-blue-400 text-white text-sm font-semibold px-4 py-1.5 shadow"
              >
                Follow
              </Button>
            </div>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
};
