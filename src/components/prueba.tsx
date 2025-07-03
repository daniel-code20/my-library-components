import React from "react";
import { Input } from "@/components/Input/Input";
import { FiMail, FiCheckCircle, FiAlertCircle, FiUser, FiSearch } from "react-icons/fi";
import { IoEyeSharp } from "react-icons/io5";

const variants = ["flat", "bordered", "underlined", "faded"] as const;
const sizes = ["sm", "md", "lg"] as const;
const radiusOptions = ["none", "sm", "md", "lg", "full"] as const;
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
    <div className="max-w-6xl mx-auto space-y-16 py-12 px-6">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
        Input Component Showcase
      </h1>

      {/* Basic Usage */}
      <section className="p-8 rounded-lg shadow-xl bg-white">
        <h2 className="mb-6 text-3xl font-bold text-gray-700 border-b border-gray-200 pb-3">
          1. Basic Usage
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Input label="Simple Input" placeholder="Enter text here" />
          <Input
            label="Disabled Input"
            placeholder="Cannot type here"
            disabled
          />
          <Input
            label="Input with Default Value"
            defaultValue="Hello World!"
            helperText="This is a pre-filled input."
          />
          <Input
            label="Password Input"
            type="password"
            placeholder="Secure password"
            rightIcon={<IoEyeSharp />}
          />
        </div>
      </section>

      {/* Variants */}
      <section className="p-8 rounded-lg shadow-xl bg-white">
        <h2 className="mb-6 text-3xl font-bold text-gray-700 border-b border-gray-200 pb-3">
          2. Variants
        </h2>
        <div className="flex flex-col gap-10">
          {variants.map((variant) => (
            <div
              key={variant}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end border-b border-gray-200 pb-6 last:border-b-0"
            >
              {/* Normal */}
              <div className="flex flex-col gap-2">
                <span className="text-lg font-semibold text-gray-800 capitalize">
                  {variant} - Normal
                </span>
                <Input
                  label={`Email (${variant})`}
                  type="email"
                  variant={variant}
                  placeholder="normal@example.com"
                  leftIcon={<FiMail />}
                />
              </div>

              {/* Loading */}
              <div className="flex flex-col gap-2">
                <span className="text-lg font-semibold text-gray-800 capitalize">
                  {variant} - Loading
                </span>
                <Input
                  label={`Email (${variant})`}
                  type="email"
                  variant={variant}
                  isLoading
                  placeholder="loading..."
                  leftIcon={<FiMail />}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Error States */}
      <section className="p-8 rounded-lg shadow-xl bg-red-50 mt-12">
        <h2 className="mb-6 text-3xl font-bold text-red-600 border-b pb-3">
          Errores
        </h2>
        <div className="flex flex-col gap-10">
          {variants.map((variant) => (
            <div key={variant} className="flex flex-col gap-2">
              <span className="text-lg font-semibold text-red-700 capitalize">
                {variant} - Error
              </span>
              <Input
                label="Email"
                type="email"
                variant={variant}
                error
                helperText="Error en el email"
                color="danger"
                placeholder="error@example.com"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Sizes */}
      <section className="p-8 rounded-lg shadow-xl bg-white">
        <h2 className="mb-6 text-3xl font-bold text-gray-700 border-b border-gray-200 pb-3">
          3. Sizes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sizes.map((size) => (
            <div key={size} className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold text-gray-700 capitalize">
                Size: {size}
              </h3>
              <Input
                label={`Email (${size})`}
                placeholder="Enter your email"
                type="email"
                size={size}
                variant="bordered"
                leftIcon={<FiMail />}
              />
              <Input
                label={`Username (${size})`}
                placeholder="Required field"
                type="text"
                size={size}
                variant="flat"
                helperText="Campo obligatorio"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Floating Labels */}
      <section className="p-8 rounded-lg shadow-xl bg-white">
        <h2 className="mb-6 text-3xl font-bold text-gray-700 border-b border-gray-200 pb-3">
          4. Floating Labels
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sizes.map((size) => (
            <div key={`floating-${size}`} className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold text-gray-700 capitalize">
                Floating Label: {size}
              </h3>
              <Input
                label={`Your Email (${size})`}
                type="email"
                size={size}
                variant="flat"
                floatingLabel
                leftIcon={<FiMail />}
              />
              <Input
                label={`Your Password (${size})`}
                type="password"
                size={size}
                variant="bordered"
                floatingLabel
                error
                helperText="Contraseña incorrecta"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Radius */}
      <section className="p-8 rounded-lg shadow-xl bg-white">
        <h2 className="mb-6 text-3xl font-bold text-gray-700 border-b border-gray-200 pb-3">
          5. Radius
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {radiusOptions.map((r) => (
            <div key={r} className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold text-gray-700 capitalize">
                Radius: {r}
              </h3>
              <Input
                label={`Email (${r})`}
                defaultValue="test@example.com"
                type="email"
                radius={r}
                variant="flat"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Colors */}
      <section className="p-8 rounded-lg shadow-xl bg-white">
        <h2 className="mb-6 text-3xl font-bold text-gray-700 border-b border-gray-200 pb-3">
          6. Colors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {colors.map((color) => (
            <div key={color} className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold text-gray-700 capitalize">
                {color}
              </h3>
              <Input
                label="Email"
                type="email"
                defaultValue="daniel@example.com"
                color={color}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Icons & Loading States */}
      <section className="p-8 rounded-lg shadow-xl bg-white">
        <h2 className="mb-6 text-3xl font-bold text-gray-700 border-b border-gray-200 pb-3">
          7. Icons & Loading States
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Input
            label="Input with Left Icon"
            placeholder="Search..."
            leftIcon={<FiSearch />}
          />
          <Input
            label="Input with Right Icon"
            placeholder="Validated"
            rightIcon={<FiCheckCircle className="text-green-500" />}
          />
          <Input
            label="Input with Both Icons"
            placeholder="User email"
            leftIcon={<FiUser />}
          />
          <Input
            label="Input with Loading State"
            placeholder="Checking availability..."
            isLoading
            leftIcon={<FiMail />}
          />
        </div>
      </section>

      {/* Textarea / Multiline */}
      <section className="p-8 rounded-lg shadow-xl bg-white">
        <h2 className="mb-6 text-3xl font-bold text-gray-700 border-b border-gray-200 pb-3">
          8. Textarea (Multiline)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Input
            label="Comments"
            placeholder="Enter your comments here..."
            multiline
            rows={4}
            variant="bordered"
          />
          <Input
            label="Description (with error)"
            placeholder="Please provide details..."
            multiline
            rows={6}
            error
            helperText="This field is required."
            variant="faded"
          />
        </div>
      </section>

      {/* Validation States (if isValid is implemented visually) */}
      <section className="p-8 rounded-lg shadow-xl bg-white">
        <h2 className="mb-6 text-3xl font-bold text-gray-700 border-b border-gray-200 pb-3">
          9. Validation States
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Input
            label="Validated Input"
            placeholder="Looks good!"
            isValid // Assuming isValid adds a visual cue like a green border/check
            rightIcon={<FiCheckCircle className="text-green-500" />}
          />
          <Input
            label="Invalid Input"
            placeholder="Something is wrong"
            error
            helperText="Please correct the error."
            rightIcon={<FiAlertCircle className="text-red-500" />}
          />
        </div>
      </section>
    </div>
  );
};
