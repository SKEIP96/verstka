"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

type FillterFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
};

export default function FilterField({
  label,
  value,
  onChange,
  options,
}: FillterFieldProps) {
  return (
    <div className="w-fit">
      <Label className="text-5 font-regular text-[#8c8c8c]">{label}</Label>
      <Select name="select" value={value} onValueChange={onChange}>
        <SelectTrigger className="mt-2 text-3 font-medium">
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          {options.map((option) => (
            <SelectItem
              key={option}
              value={option}
              className="text-5 font-medium"
            >
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
