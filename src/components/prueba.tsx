import React from "react";
import { DarkModeToggle } from "./DarkModeToggle";
import { Breadcrumbs } from "@/components/Breadcrumbs/Breadcrumbs";
import { BreadcrumbItem } from "@/components/Breadcrumbs";

export const Prueba: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-white text-black dark:bg-zinc-900 dark:text-white transition-colors duration-500">
      {/* Header + Toggle */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">🌗 Modo Oscuro en Tailwind</h1>
        <DarkModeToggle />
      </div>

      {/* Component */}
      <div className="w-full max-w-md">
        <Breadcrumbs
          variant="bordered"
          radius="md"
          color="foreground"
          size="md"
          underline="hover"
          separator=">"
          maxItems={4}
          itemsBeforeCollapse={1}
          itemsAfterCollapse={1}
          onAction={(key) => console.log("Clicked:", key)}
        >
          <BreadcrumbItem>Inicio</BreadcrumbItem>
          <BreadcrumbItem>Biblioteca</BreadcrumbItem>
          <BreadcrumbItem>Libros</BreadcrumbItem>
          <BreadcrumbItem isCurrent>Detalle</BreadcrumbItem>
        </Breadcrumbs>
      </div>
    </div>
  );
};
