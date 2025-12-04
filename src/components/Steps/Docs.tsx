import React from "react";
import type { useForm } from "react-hook-form";
import type { StepFormData } from "../../types";

interface StepProps {
  register: ReturnType<typeof useForm<StepFormData>>["register"];
  errors: Record<string, { message?: string }>;
  setValue?: ReturnType<typeof useForm<StepFormData>>["setValue"];
}
const Docs = ({ register, errors }: StepProps) => {
  return (
    <div className="space-y-4">
      <p className="text-sm font-normal">
        You can view your students who doesn’t have access to Zusammen.
      </p>
      <h3 className="text-sm px-4 py-2 bg-gray-100 w-fit rounded-md mt-8">
        Document of apc/3434/045454
      </h3>
      <p className="text-sm font-medium ">
        Please upload the document as per document checklist.
      </p>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Upload on behalf
          </label>
          <input
            type="text"
            id="uploadOnBehalf"
            {...register("uploadOnBehalf")}
            {...errors}
            disabled
            placeholder="subscription"
            className="w-full rounded-md border border-gray-400 px-4 py-2 text-sm outline-none focus:border-black focus:ring-1 focus:ring-gray-800"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Document Category
          </label>
          <input
            // type="date"
            disabled
            id="category"
            {...register("category")}
            placeholder="category"
            className="w-full rounded-md border border-gray-400 px-4 py-2 text-sm outline-none focus:border-black focus:ring-1 focus:ring-gray-800"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Document Sub Category
          </label>
          <input
            type="text"
            id="sunCategory"
            {...register("uploadOnBehalf")}
            disabled
            placeholder="subscription"
            className="w-full rounded-md border border-gray-400 px-4 py-2 text-sm outline-none focus:border-black focus:ring-1 focus:ring-gray-800"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Select Document
          </label>
          <input
            // type="date"
            disabled
            id="documentOriginCountry"
            {...register("documentOriginCountry")}
            placeholder="category"
            className="w-full rounded-md border border-gray-400 px-4 py-2 text-sm outline-none focus:border-black focus:ring-1 focus:ring-gray-800"
          />
        </div>
      </div>
    </div>
  );
};

export default Docs;
