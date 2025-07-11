import { useState } from "react";
import { Select } from "@/components/Select";
import { Switch } from "@/components/Switch";
import { Checkbox } from "@/components/Checkbox";

export const Prueba: React.FC = () => {
  const [selected, setSelected] = useState("option1");
  const [isChecked, setIsChecked] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="p-8 space-y-6 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold text-gray-800">Componentes Básicos</h2>

      {/* Select */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Select</h3>
        <Select
          label="Elige una opción"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          options={[
            { label: "Opción 1", value: "option1" },
            { label: "Opción 2", value: "option2" },
            { label: "Opción 3", value: "option3" },
          ]}
        />
        <p className="mt-2 text-sm text-gray-600">
          Valor seleccionado: <strong>{selected}</strong>
        </p>
      </div>

      {/* Checkbox */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Checkbox</h3>
        <Checkbox
          label="Aceptar términos y condiciones"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
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

