import { Input } from '@/ui/input';

export interface MessageInputProps {
  value: string;
  setValue: (value: string) => void;
  className?: string;
  messageSendHandler: () => void;
  disabled?: boolean;
  placeholder?: string;
}
