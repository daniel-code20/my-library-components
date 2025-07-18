import { Popover, PopoverTrigger, PopoverContent } from "@/components/Popover";
import { Button } from "./Button";

export const Prueba: React.FC = () => {
  const content = (
    <PopoverContent>
      <div className="p-4">
        <div className="text-sm font-bold">Popover Content</div>
        <div className="text-xs">This is the popover content</div>
      </div>
    </PopoverContent>
  );

  const colors = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
  ] as const;

  return (
        <div className="min-h-screen flex flex-wrap justify-center items-center gap-4">
      {colors.map((color) => (
        <Popover key={color} color={color} placement="bottom" backdrop="blur">
          <PopoverTrigger>
            <Button className="capitalize" color={color}>
              {color}
            </Button>
          </PopoverTrigger>
          {content}
        </Popover>
      ))}
    </div>
  );
};
