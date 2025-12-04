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
const BasicInfoStep = ({ register, errors, setValue }: StepProps) => {
  return <Basic errors={errors} register={register} setValue={setValue} />;
};
const StudentDocStep = ({ register, errors, setValue }: StepProps) => {
  return <Docs register={register} errors={errors} setValue={setValue} />;
};
const ApplicationChecklistStep = ({
  register,
  errors,
  setValue,
}: StepProps) => {
  return (
    <Application register={register} errors={errors} setValue={setValue} />
  );
};
const PreVisaChecklistStep = ({ register, errors, setValue }: StepProps) => {
  return <PreVisa register={register} errors={errors} setValue={setValue} />;
};
const VisaCheckListSTep = ({ register, errors,setValue }: StepProps) => {
  return <Visa register={register} errors={errors} setValue={setValue}/>;
};

export {
  BasicInfoStep,
  ApplicationChecklistStep,
  StudentDocStep,
  PreVisaChecklistStep,
  VisaCheckListSTep,
};
