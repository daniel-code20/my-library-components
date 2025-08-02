import React from "react";
import { DarkModeToggle } from "./DarkModeToggle";
import { Progress } from "./Progress";

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
        <Progress
          label="Loading"
          value={50}
          size="md"
          color="primary"
          isStriped
       
        />
      </div>
    </div>
  );
};
