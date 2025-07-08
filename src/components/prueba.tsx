import { Form } from "@/components/Form";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

export const Prueba: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Datos del formulario:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <Form onSubmit={handleSubmit}>
          <Input label="Name" name="name" type="text"/>
          <Input label="Email" name="email" type="email" isRequired />
          <Input
            label="Contraseña"
            name="password"
            type="password"
            isRequired
            minLength={8}
          />
          <Button type="submit" color="primary">
            Enviar
          </Button>
        </Form>
      </div>
    </div>
  );
};
