import { Select } from "./Select";

export const Prueba: React.FC = () => {

    const items = [
    { key: "1", label: "Opción 1" },
    { key: "2", label: "Opción 2" },
    { key: "3", label: "Opción 3" },
    { key: "4", label: "Opción 3" },
    { key: "5", label: "Opción 3" },
    { key: "6", label: "Opción 3" },
    { key: "7", label: "Opción 3" },
    { key: "8", label: "Opción 3" },
    { key: "9", label: "Opción 3" },
    { key: "10", label: "Opción 3" },
    { key: "11", label: "Opción 3" },
  ];

  return (
    <div className="p-8 space-y-6 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold text-gray-800">Componentes Básicos</h2>
       <Select
        items={items}
        label="Selecciona una opción"
        placeholder="Elige una opción"
        
      />
    </div>
  );
};
