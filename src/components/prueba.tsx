import React from "react";
import { Input } from "@/components/Input/Input";

const variants = ["flat", "bordered", "underlined", "faded"] as const;
const sizes = ["sm", "md", "lg"] as const;
const radius = ["none", "sm", "md", "lg", "full"] as const;
const colors = ["default", "primary", "secondary", "success", "warning", "danger"] as const;

export const Prueba: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-10 py-8 px-4">

      {/* Variants */}
      <section className="p-6 rounded-lg shadow-md bg-white">
        <h2 className="mb-4 text-xl font-semibold">Variants</h2>
        <div className="flex flex-col gap-6">
          {variants.map((variant) => (
            <div
              key={variant}
              className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              <div className="w-full md:w-1/2">
                <Input label={`Email (${variant})`} type="email" variant={variant} />
              </div>
              <div className="w-full md:w-1/2">
                <Input
                  label={`Email (${variant})`}
                  placeholder="Enter your email"
                  type="email"
                  variant={variant}
                />
                
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sizes */}
      <section className="p-6 rounded-lg shadow-md bg-white">
        <h2 className="mb-4 text-xl font-semibold">Sizes</h2>
        <div className="flex flex-col gap-6">
          {sizes.map((size) => (
            <div
              key={size}
              className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              <div className="w-full md:w-1/2">
                <Input label={`Email (${size})`} type="email" size={size} variant="flat" />
              </div>
              <div className="w-full md:w-1/2">
                <Input
                  label={`Email (${size})`}
                  placeholder="Enter your email"
                  type="email"
                  size={size}
                  variant="flat"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="p-6 rounded-lg shadow-md bg-white">
        <h2 className="mb-4 text-xl font-semibold">Radius</h2>
        <div className="flex flex-col gap-6">
          {radius.map((radius) => (
            <div
              key={radius}
              className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              <div className="w-full md:w-1/2">
                <Input label={`Email (${radius})`} type="email" radius={radius} variant="flat" />
              </div>
              <div className="w-full md:w-1/2">
                <Input
                  label={`Email (${radius})`}
                  defaultValue="daniel@example.com"
                  type="email"
                  radius={radius}
                  variant="bordered"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Colors */}
      <section className="p-6 rounded-lg shadow-md bg-white">
        <h2 className="mb-4 text-xl font-semibold">Colors</h2>
        <div className="flex flex-col gap-6">
          {colors.map((color) => (
            <div
              key={color}
              className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              <div className="w-full md:w-1/2">
                <Input label={`Email (${color})`} type="email" color={color} />
              </div>
              <div className="w-full md:w-1/2">
                <Input
                  label={`Email (${color})`}
                  placeholder="Enter your email"
                  type="email"
                  color={color}
                  
                />
                
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
