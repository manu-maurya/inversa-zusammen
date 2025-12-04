import { useState } from "react";
import {
  basicInformationSchema,
  checklistSchema,
  previsachecklistSchema,
  studentsDocumentSchema,
  visachecklistSchema,
  type Step,
  type StepFormData,
} from "../types";
import { User } from "lucide-react";
const stepSchema = [
  basicInformationSchema,
  studentsDocumentSchema,
  checklistSchema,
  visachecklistSchema,
  previsachecklistSchema,
];

export const steps: Step[] = [
  {
    id: "basic",
    name: "Basic Information",
    icon: User,
    schema: basicInformationSchema,
    label: "Student Basic Information",
  },
  {
    id: "document",
    name: "Student Documents",
    icon: User,
    schema: studentsDocumentSchema,
    label: "Student Documents",
  },
  {
    id: "app checklist",
    name: "Application Checklist",
    icon: User,
    schema: checklistSchema,
    label: "Application CHecklistn",
  },
  {
    id: "pre-visa",
    name: "Pre-Visa Checklist",
    icon: User,
    schema: previsachecklistSchema,
    label: "Pre-Visa Checklist",
  },
  {
    id: "visa",
    name: "Visa Checklist",
    icon: User,
    schema: visachecklistSchema,
    label: "Visa Checklist",
  },
];

export function useMultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
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
