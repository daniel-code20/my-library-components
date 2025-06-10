import React from "react";
import { Button } from "./Button";
import { FiEdit, FiTrash2, FiCheck } from "react-icons/fi";

const colors = ["default", "primary", "warning", "danger", "violet", "green"] as const;

export const Prueba: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-8">
      <div className="w-full max-w-5xl flex flex-col gap-10">
        {/* Grupo de botones por color */}
        <div className="p-6 rounded-lg bg-slate-950 border border-white/10 shadow-md">
          <h1 className="text-xl mb-4 font-bold text-white">Colors</h1>
          <div className="flex flex-wrap gap-4">
            {colors.map((color) => (
              <Button key={color} color={color} size="md" radius="sm" className="w-32">
                {color.charAt(0).toUpperCase() + color.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        {/* Grupo de variantes */}
        <div className="p-6 rounded-lg bg-slate-950 border border-white/10 shadow-md">
          <h1 className="text-xl mb-4 font-bold text-white">Variants</h1>
          <div className="flex flex-wrap gap-4">
            <Button variant="solid" color="violet" className="w-32">
              Solid
            </Button>
            <Button variant="outline" color="violet" className="w-32">
              Outline
            </Button>
            <Button variant="light" color="violet" className="w-32">
              Light
            </Button>
            <Button variant="smooth" color="violet" className="w-32">
              Smooth
            </Button>
            <Button variant="ghost" color="violet" className="w-32">
              Ghost
            </Button>
          </div>
        </div>

        <div className="p-6 rounded-lg bg-slate-950 border border-white/10 shadow-md">
          <h1 className="text-xl mb-4 font-bold text-white">Con íconos</h1>
          <div className="flex flex-wrap gap-4">
            <Button color="primary" leftIcon={<FiCheck />} className="w-32">
              Aceptar
            </Button>
            <Button color="green" rightIcon={<FiEdit />} className="w-32">
              Editar
            </Button>
            <Button color="danger" leftIcon={<FiTrash2 />} className="w-32">
              Eliminar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prueba;
