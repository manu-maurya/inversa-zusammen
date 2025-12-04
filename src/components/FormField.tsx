import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import type { AllFormField, StepFormData } from "@/types";
import type { useForm } from "react-hook-form";

const FormField = ({
  register,
  id,
  label,
  errors,
  type = "text",
  maxLength,
  placeholder,
  disabled,
}: {
  id: keyof AllFormField;
  label: string;
  register: ReturnType<typeof useForm<StepFormData>>["register"];
  errors: Record<string, { message?: string }>;
  type?: string;
  maxLength?: number;
  placeholder?: string;
  disabled?: boolean;
}) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        maxLength={maxLength}
        {...register(id)}
        placeholder={placeholder}
        disabled={disabled}
        className={`${disabled ? "font-bold" : ""}`}
      />
      {errors[id] && (
        <p className="text-sm text-destructive">{errors[id]?.message}</p>
      )}
    </div>
  );
};

export default FormField;
