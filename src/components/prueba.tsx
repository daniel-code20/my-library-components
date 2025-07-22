import { Textarea} from "@/components/Textarea";

export const Prueba: React.FC = () => {

  return (
    <div className="p-4">
      <Textarea
        label="Description"
        placeholder="Enter your description (Default autosize)"
      />
      <Textarea
        label="Description"
        minRows={2}
        placeholder="Enter your description (Min rows 2)"
      />
      <Textarea
        label="Description"
        maxRows={3}
        placeholder="Enter your description (Max rows 3)"
      />
      <Textarea
        label="Description"
        disableAutosize
        placeholder="Autosize disabled"
      />
      <Textarea label="Description" variant="flat" placeholder="Enter your description"/>
      <Textarea label="Description" variant="faded" placeholder="Enter your description"/>
      <Textarea label="Description" variant="bordered" placeholder="Enter your description"/>
      <Textarea label="Description" variant="underlined" placeholder="Enter your description"/>
      <Textarea label="Description" disabled placeholder="Disabled textarea" />
      <Textarea label="Description" readOnly placeholder="Read-only textarea" />
      <Textarea label="Description" required placeholder="Required textarea" />
      <Textarea
        label="Description"
        clearable
        placeholder="Textarea with clear button"
      />
    </div>
  );
};
