import React from "react";
import { Button } from "./Button";
import {
  FiNavigation,
  FiArrowRight,
  FiPlus,
  FiArrowLeft,
  FiHeart,
  FiBell,
} from "react-icons/fi";
import { IoIosLink } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import { IconButton } from "./Button/IconButton";
import { ToggleSwitch } from "./Button/ToggleSwitch";

const colors = [
  "default",
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
] as const;

export const Prueba: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-8">
      <div className="w-full max-w-5xl flex flex-col gap-10">
        {/* Grupo de botones por color */}
        <div className="p-6 rounded-lg bg-slate-950 border border-white/10 shadow-md">
          <h1 className="text-xl mb-4 font-bold text-white">Colors</h1>
          <div className="flex flex-wrap gap-4 ">
            {colors.map((color) => (
              <Button key={color} color={color} size="md" radius="md">
                {color.charAt(0).toUpperCase() + color.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        {/* Grupo de botones por variante */}
        <div className="p-6 rounded-lg bg-slate-950 border border-white/10 shadow-md">
          <h1 className="text-xl mb-4 font-bold text-white">Outline</h1>
          <div className="flex flex-wrap gap-4">
            {colors.map((color) => (
              <Button
                key={color}
                color={color}
                size="md"
                radius="md"
                variant="outline"
              >
                {color.charAt(0).toUpperCase() + color.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        {/* Grupo de botones por variante */}
        <div className="p-6 rounded-lg bg-slate-950 border border-white/10 shadow-md">
          <h1 className="text-xl mb-4 font-bold text-white">Smooth</h1>
          <div className="flex flex-wrap gap-4">
            {colors.map((color) => (
              <Button
                key={color}
                color={color}
                size="md"
                radius="md"
                variant="smooth"
              >
                {color.charAt(0).toUpperCase() + color.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        {/* Grupo de botones por variante */}
        <div className="p-6 rounded-lg bg-slate-950 border border-white/10 shadow-md">
          <h1 className="text-xl mb-4 font-bold text-white">Ghost</h1>
          <div className="flex flex-wrap gap-4">
            {colors.map((color) => (
              <Button
                key={color}
                color={color}
                size="md"
                radius="md"
                variant="ghost"
              >
                {color.charAt(0).toUpperCase() + color.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        {/* Grupo de botones por variante */}
        <div className="p-6 rounded-lg bg-slate-950 border border-white/10 shadow-md">
          <h1 className="text-xl mb-4 font-bold text-white">Faint</h1>
          <div className="flex flex-wrap gap-4">
            {colors.map((color) => (
              <Button
                key={color}
                color={color}
                size="md"
                radius="md"
                variant="faint"
              >
                {color.charAt(0).toUpperCase() + color.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        {/* Grupo de botones por variante */}
        <div className="p-6 rounded-lg bg-slate-950 border border-white/10 shadow-md">
          <h1 className="text-xl mb-4 font-bold text-white">With Left Icons</h1>
          <div className="flex flex-wrap gap-4">
            <Button
              leftIcon={<FiNavigation />}
              color="primary"
              size="md"
              radius="md"
              variant="solid"
            >
              Get Started
            </Button>
            <Button
              leftIcon={<IoIosLink />}
              color="secondary"
              size="md"
              radius="md"
              variant="solid"
            >
              Copy Link
            </Button>
            <Button
              leftIcon={<AiOutlineDelete />}
              color="danger"
              size="md"
              radius="md"
              variant="solid"
            >
              Delete
            </Button>
            <Button
              leftIcon={<FiArrowLeft />}
              color="primary"
              size="md"
              radius="md"
              variant="solid"
            >
              Back
            </Button>
          </div>
        </div>

        {/* Grupo de botones por variante */}
        <div className="p-6 rounded-lg bg-slate-950 border border-white/10 shadow-md">
          <h1 className="text-xl mb-4 font-bold text-white">
            With Right Icons
          </h1>
          <div className="flex flex-wrap gap-4">
            <Button
              rightIcon={<FiNavigation />}
              color="primary"
              size="md"
              radius="md"
              variant="solid"
            >
              Get Started
            </Button>
            <Button
              rightIcon={<IoIosLink />}
              color="secondary"
              size="md"
              radius="md"
              variant="solid"
            >
              Copy Link
            </Button>
            <Button
              rightIcon={<AiOutlineDelete />}
              color="danger"
              size="md"
              radius="md"
              variant="solid"
            >
              Delete
            </Button>
            <Button
              rightIcon={<FiArrowRight />}
              color="primary"
              size="md"
              radius="md"
              variant="solid"
            >
              Next
            </Button>
          </div>
        </div>

        {/* Grupo de botones por variante */}
        <div className="p-6 rounded-lg bg-slate-950 border border-white/10 shadow-md">
          <h1 className="text-xl mb-4 font-bold text-white">Icon Button</h1>
          <div className="flex flex-wrap gap-4 items-start">
            <IconButton
              icon={<FiPlus />}
              color="primary"
              variant="solid"
              size="md"
              radius="lg"
              aria-label="Buscar"
            />
            <IconButton
              icon={<FiHeart />}
              color="danger"
              variant="solid"
              size="md"
              radius="lg"
              aria-label="Buscar"
            />
            <IconButton
              icon={<FiBell />}
              color="warning"
              variant="solid"
              size="md"
              radius="lg"
              aria-label="Buscar"
            />
          </div>
        </div>

        <div className="p-6 rounded-lg bg-slate-950 border border-white/10 shadow-md">
          <h1 className="text-xl mb-4 font-bold text-white">Toggle Button</h1>
          <div className="flex flex-wrap gap-4">
            <ToggleSwitch
              label="Activate notifications"
              size="md"
              color="success"
              onChange={(e) => console.log(e.target.checked)}
            />
          </div>
        </div>

        <div className="p-6 rounded-lg bg-slate-950 border border-white/10 shadow-md">
          <h1 className="text-xl mb-4 font-bold text-white">Loading</h1>
          <div className="flex flex-wrap gap-4">
            <Button
              color="primary"
              size="md"
              radius="md"
              variant="solid"
              loading
            >
              Loading
            </Button>
          </div>
        </div>

        {/* Grupo de botones por sizes */}
        <div className="p-6 rounded-lg bg-slate-950 border border-white/10 shadow-md">
          <h1 className="text-xl mb-4 font-bold text-white">Sizes</h1>
          <div className="flex flex-wrap gap-4 items-start">
            <Button color="default" size="sm" radius="md" variant="solid">
              Small
            </Button>
            <Button color="default" size="md" radius="md" variant="solid">
              Medium
            </Button>
            <Button color="default" size="lg" radius="md" variant="solid">
              Large
            </Button>
          </div>
        </div>

        {/* Grupo de botones por radius */}
        <div className="p-6 rounded-lg bg-slate-950 border border-white/10 shadow-md">
          <h1 className="text-xl mb-4 font-bold text-white">Radius</h1>
          <div className="flex flex-wrap gap-4 items-start">
            <Button color="default" size="md" radius="none" variant="solid">
              None
            </Button>
            <Button color="default" size="md" radius="sm" variant="solid">
              Small
            </Button>
            <Button color="default" size="md" radius="md" variant="solid">
              Medium
            </Button>
            <Button color="default" size="md" radius="lg" variant="solid">
              Large
            </Button>
            <Button color="default" size="md" radius="full" variant="solid">
              Full
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prueba;
