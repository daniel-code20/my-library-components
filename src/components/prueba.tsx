import { Avatar } from "./Avatar";
import { Badge } from "./Badge";
import { DarkModeToggle } from "./DarkModeToggle";

export const Prueba: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black dark:bg-zinc-900 dark:text-white transition-colors duration-500">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">🌗 Modo Oscuro en Tailwind</h1>
        <DarkModeToggle />
      </div>
      <div className="space-x-4">
        <Badge badgeContent="3" color="danger" variant="solid" position="top-right" size="md" >
          <Avatar src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" size="lg" />
        </Badge>
      </div>
    </div>
  );
};
