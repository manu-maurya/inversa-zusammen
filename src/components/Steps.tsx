import React from "react";
import type { useForm } from "react-hook-form";
import type { StepFormData } from "../types";
import Basic from "./Steps/Basic";
import Docs from "./Steps/Docs";
import Application from "./Steps/Application";
import PreVisa from "./Steps/PreVisa";
import Visa from "./Steps/Visa";

interface StepProps {
  register: ReturnType<typeof useForm<StepFormData>>["register"];
  errors: Record<string, { message?: string }>;
  setValue?: ReturnType<typeof useForm<StepFormData>>["setValue"];
}
const inputClass = (hasError: boolean) =>
  `w-full rounded-md border px-4 py-2 text-sm outline-none focus:ring-1 focus:ring-gray-800 ${
    hasError
      ? "border-red-500 focus:border-red-500"
      : "border-gray-400 focus:border-black"
  }`;

const labelClass = "mb-1 block text-sm font-medium text-gray-700";
const BasicInfoStep = ({ register, errors }: StepProps) => {
  return <Basic errors={errors} register={register} />;
};
const StudentDocStep = ({ register, errors }: StepProps) => {
  return <Docs register={register} errors={errors} />;
};
const ApplicationChecklistStep = ({ register, errors }: StepProps) => {
  return <Application register={register} errors={errors} />;
};
const PreVisaChecklistStep = ({ register, errors }: StepProps) => {
  return <PreVisa register={register} errors={errors} />;
};
const VisaCheckListSTep = ({ register, errors }: StepProps) => {
  return <Visa register={register} errors={errors} />;
};

export {
  BasicInfoStep,
  ApplicationChecklistStep,
  StudentDocStep,
  PreVisaChecklistStep,
  VisaCheckListSTep,
};
