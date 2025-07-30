import { Avatar } from "./Avatar";
import { DarkModeToggle } from "./DarkModeToggle";

export const Prueba: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black dark:bg-zinc-900 dark:text-white transition-colors duration-500">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">🌗 Modo Oscuro en Tailwind</h1>
        <DarkModeToggle />
      </div>
      <div className="space-x-4">
        <Avatar alt="Daniel"  color="success" radius="full"/>
        <Avatar alt="Daniel" borderColor="warning" variant="bordered" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Avatar alt="Daniel Tejada" size="md" radius="full" />
        <Avatar fallback="DT" variant="bordered" color="primary" />
        <Avatar   color="primary" />
        <Avatar fallback="DT" variant="bordered" color="primary" />
        <Avatar alt="No disponible" disabled />
        <Avatar
          fallback={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.121 17.804A13.937 13.937 0 0112 15c2.42 0 4.675.86 6.879 2.303M15 10a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          }
        />
      </div>
    </div>
  );
};
