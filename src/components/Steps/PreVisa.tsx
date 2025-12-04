import React from 'react'
import type { useForm } from "react-hook-form";
import type { StepFormData } from "../../types";

interface StepProps {
  register: ReturnType<typeof useForm<StepFormData>>["register"];
  errors: Record<string, { message?: string }>;
  setValue?: ReturnType<typeof useForm<StepFormData>>["setValue"];
}
const PreVisa = ({register,errors}:StepProps) => {
  return (
    <div className="space-y-4">
          <p className="text-sm font-normal">
            You can view your students who doesn’t have access to Zusammen.
          </p>
          <h3 className="text-sm px-4 py-2 bg-gray-100 w-fit rounded-md mt-8">
            Pre Visa Documents Checklist of Aman Deshmukh, apc/2323/494954
          </h3>
          <p className="text-sm font-medium ">
            Please upload the document as per document checklist.
          </p>
          <div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Select Course
              </label>
              <input
                type="text"
                id="selectedCourse"
                {...register("selectedCourse")}
                {...errors}
                disabled
                placeholder="subscription"
                className="w-full rounded-md border border-gray-400 px-4 py-2 text-sm outline-none focus:border-black focus:ring-1 focus:ring-gray-800"
              />
            </div>
            <div className="grid grid-cols-2 mt-10">
              <input
                disabled
                placeholder="Course of Residence"
                className="w-full border border-gray-400 px-4 py-2 text-sm outline-none focus:border-black focus:ring-1 focus:ring-gray-800"
              />
              <input
                disabled
                placeholder="Course"
                className="w-full border border-gray-400 px-4 py-2 text-sm outline-none focus:border-black focus:ring-1 focus:ring-gray-800"
              />
              <input
                disabled
                placeholder="University"
                className="w-full border border-gray-400 px-4 py-2 text-sm outline-none focus:border-black focus:ring-1 focus:ring-gray-800"
              />
              <input
                disabled
                placeholder="Application ID"
                className="w-full border border-gray-400 px-4 py-2 text-sm outline-none focus:border-black focus:ring-1 focus:ring-gray-800"
              />
            </div>
            <input
              disabled
              placeholder="Visa Application ID"
              className="w-full border border-gray-400 px-4 py-2 text-sm outline-none focus:border-black focus:ring-1 focus:ring-gray-800"
            />
          </div>
        </div>
  )
}

export default PreVisa
