import React, { useEffect } from "react";
import { useMultiStepForm } from "../hooks/useMultiStepFOrm";
import { FormProvider, useForm } from "react-hook-form";
import type { StepFormData } from "../types";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ApplicationChecklistStep,
  BasicInfoStep,
  PreVisaChecklistStep,
  StudentDocStep,
  VisaCheckListSTep,
} from "./Steps";

const MultiStepForm = () => {
  const {
    currentStep,
    formData,
    isSubmitted,
    getCurrentStepSchema,
    goToNext,
    goToPrevious,
    isFirst,
    isLast,
    resetForm,
    steps,
    submitForm,
    updateForm,
  } = useMultiStepForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    setValue,
    reset,
  } = useForm<StepFormData>({
    // zodResolver returns a resolver typed to the schema's inferred type which can
    // differ from StepFormData for per-step schemas; cast to any to satisfy TS.
    resolver: zodResolver(getCurrentStepSchema()) as any,
    mode: "onChange",
    defaultValues: formData,
  });
  useEffect(() => {
    reset(formData);
  }, [currentStep, formData, reset]);
  const onNext = async (data: StepFormData) => {
    const isValid = await trigger();
    if (!isValid) return;
    console.log(data, formData);

    const updatedData = { ...formData, ...data };
    updateForm(updatedData);
    if (isLast) {
      try {
        submitForm(updatedData);
      } catch (error) {
        console.log("Failed", error);
      }
    } else {
      goToNext();
    }
  };
  return (
    <div className="min-h-screen bg-white flex flex-col items-center pb-12">
      <div className="w-full h-16 bg-white px-12 mt-2 flex items-center justify-between">
        <img src="src/assets/logo.png" alt="logo" />
        <button className="border border-gray-300 px-4 py-2 rounded-md text-sm hover:bg-gray-50 hover:scale-105 transition-all">
          Go back
        </button>
      </div>
      <div className="w-full max-w-4xl mt-8 px-4">
        <div className="flex justify-between relative mb-12 max-w-3xl mx-auto">
          {/* Background Line */}
          <div className="absolute top-4 left-0 w-full h-0.5 bg-gray-200 -z-10" />

          {steps.map((step, index) => {
            const isCompleted = index < currentStep;
            const isActive = index === currentStep;

            return (
              <div
                key={step.id}
                className="flex flex-col items-center bg-transparent"
              >
                <div
                  className={`w-4 h-4 rounded-full flex items-center justify-center text-sm font-semibold transition-colors duration-200
                    ${
                      isActive
                        ? "bg-blue-300 text-blue-600"
                        : isCompleted
                        ? "bg-green-500 border-green-500 text-white"
                        : "bg-gray-300 text-gray-400"
                    }`}
                >
                  {isCompleted ? "✓" : ""}
                </div>
                <span
                  className={`text-xs mt-2 font-medium ${
                    isActive
                      ? "text-black font-bold"
                      : "text-gray-500 font-normal"
                  }`}
                >
                  {step.name}
                </span>
              </div>
            );
          })}
        </div>
        <form className="bg-white shadow-xl rounded-2xl p-8 min-h-[600px] flex flex-col">
          <h2 className="text-xl font-bold text-black mb-2">
            {steps[currentStep].label}
          </h2>

          <div className="space-y-4">
            {currentStep === 0 && (
              <BasicInfoStep register={register} errors={errors} />
            )}
            {currentStep === 1 && (
              <StudentDocStep register={register} errors={errors} />
            )}
            {currentStep === 2 && (
              <ApplicationChecklistStep register={register} errors={errors} />
            )}
            {currentStep === 3 && (
              <PreVisaChecklistStep register={register} errors={errors} />
            )}
            {currentStep === 4 && (
              <VisaCheckListSTep register={register} errors={errors} />
            )}
            <div className="mt-8 flex items-baseline justify-between gap-3 pt-6 ">
              {isFirst && (
                <button
                  type="button"
                  onClick={goToPrevious}
                  className="px-6 py-3 border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition"
                >
                  Back
                </button>
              )}
              <button
                type="submit"
                onClick={handleSubmit(onNext)}
                className="px-6 py-2.5 rounded-lg bg-[#1E293B] text-white font-medium hover:bg-slate-800 transition shadow-lg shadow-slate-300"
              >
                {isLast ? "submit" : "Next"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MultiStepForm;
