import { useCallback, useState } from "react";

interface UseDisclosureProps {
  defaultOpen?: boolean;
  onChange?: (isOpen: boolean) => void;
}

export const useDisclosure = ({
  defaultOpen = false,
  onChange,
}: UseDisclosureProps = {}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const onOpen = useCallback(() => {
    setIsOpen(true);
    onChange?.(true);
  }, [onChange]);

  const onClose = useCallback(() => {
    setIsOpen(false);
    onChange?.(false);
  }, [onChange]);

  const onToggle = useCallback(() => {
    setIsOpen((prev) => {
      const next = !prev;
      onChange?.(next);
      return next;
    });
  }, [onChange]);

  const onOpenChange = useCallback(
    (value: boolean) => {
      setIsOpen(value);
      onChange?.(value);
    },
    [onChange]
  );

  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
    onOpenChange,
  };
};
