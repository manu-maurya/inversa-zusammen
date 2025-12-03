import { useState } from "react";
import {
  basicInformationSchema,
  checklistSchema,
  studentsDocumentSchema,
  type Step,
  type StepFormData,
} from "../types";
import { User } from "lucide-react";
const stepSchema = [
  basicInformationSchema,
  studentsDocumentSchema,
  checklistSchema,
];

export const steps: Step[] = [
  {
    id: "",
    name: "",
    icon: User,
    schema: basicInformationSchema,
  },
  {
    id: "",
    name: "",
    icon: User,
    schema: studentsDocumentSchema,
  },
  {
    id: "",
    name: "",
    icon: User,
    schema: checklistSchema,
  },
  {
    id: "",
    name: "",
    icon: User,
    schema: checklistSchema,
  },
  {
    id: "",
    name: "",
    icon: User,
    schema: checklistSchema,
  },
];

export function useMultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFOrmData] = useState<Partial<StepFormData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const isFirst = currentStep === 0;
  const isLast = currentStep === steps.length - 1;

  const getCurrentStepSchema = () => stepSchema[currentStep];

  const goToNext = () => {
    if (!isLast) setCurrentStep((prev) => prev + 1);
  };
  const goToPrevious = () => {
    if (!isFirst) setCurrentStep((prev) => prev - 1);
  };
  const updateForm = (newData: StepFormData) => {
    setFOrmData((prev) => ({ ...prev, ...newData }));
  };
  const submitForm = (data: StepFormData) => {
    console.log("Form Data", data);
    setIsSubmitted(true);
  };
  const resetForm = () => {
    setFOrmData({});
    setCurrentStep(0);
    setIsSubmitted(false);
  };
  return {
    currentStep,
    formData,
    isSubmitted,
    isFirst,
    isLast,
    steps,
    getCurrentStepSchema,
    goToNext,
    goToPrevious,
    updateForm,
    submitForm,
    resetForm,
  };
}
