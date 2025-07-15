import { useState } from "react";
import { Select } from "@/components/Select";
import { Switch } from "@/components/Switch";
import { Checkbox } from "@/components/Checkbox";

export const Prueba: React.FC = () => {
  
  const [isChecked, setIsChecked] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const animals = [
    { key: "cat", label: "Cat" },
    { key: "dog", label: "Dog" },
    { key: "elephant", label: "Elephant" },
    { key: "lion", label: "Lion" },
    { key: "tiger", label: "Tiger" },
    { key: "giraffe", label: "Giraffe" },
    { key: "dolphin", label: "Dolphin" },
    { key: "penguin", label: "Penguin" },
    { key: "zebra", label: "Zebra" },
    { key: "shark", label: "Shark" },
    { key: "whale", label: "Whale" },
    { key: "otter", label: "Otter" },
    { key: "crocodile", label: "Crocodile" },
  ];

  return (
    <div className="p-8 space-y-6 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold text-gray-800">Componentes Básicos</h2>

      {/* Select */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Select</h3>
        <Select
          items={animals}
          placeholder="Select an animal"
          onChange={(value) => console.log("Selected:", value)}
          className="max-w-xs"
        />
      </div>

      {/* Checkbox */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Checkbox</h3>
        
      <Checkbox
        label="Aceptar términos y condiciones"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
        color="primary"
        size="md"
        radius="md"
      />

        <p className="mt-2 text-sm text-gray-600">
          Estado: <strong>{isChecked ? "Marcado" : "Desmarcado"}</strong>
        </p>
      </div>

      {/* Switch */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Switch</h3>
        <Switch
          label="Modo oscuro"
          checked={isToggled}
          onChange={() => setIsToggled((prev) => !prev)}
        />
        <p className="mt-2 text-sm text-gray-600">
          Estado: <strong>{isToggled ? "Activado" : "Desactivado"}</strong>
        </p>
      </div>
    </div>
  );
};
