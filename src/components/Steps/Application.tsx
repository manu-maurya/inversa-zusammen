import type { useForm } from "react-hook-form";
import type { StepFormData } from "../../types";
import { useState } from "react";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface StepProps {
  register: ReturnType<typeof useForm<StepFormData>>["register"];
  errors: Record<string, { message?: string }>;
  setValue?: ReturnType<typeof useForm<StepFormData>>["setValue"];
}
const Application = ({ register, errors, setValue }: StepProps) => {
  const [selectedCourse, setSelectedCourse] = useState("");
  return (
    <div className="space-y-4">
      <p className="text-sm font-normal">
        You can view your students who doesn’t have access to Zusammen.
      </p>
      <h3 className="text-sm px-4 py-2 bg-gray-100 w-fit rounded-md mt-8">
        Application Documents Checklist of Aman Deshmukh, apc/2323/494954
      </h3>
      <p className="text-sm font-medium ">
        Please upload the document as per document checklist.
      </p>
      <div>
        <div className="space-y-2">
          <Label htmlFor="selectedCourse">
            Selected Course
            
          </Label>
          <Select
            onValueChange={(value) => {
              setValue?.(
                "selectedCourse",
                value as Extract<
                  StepFormData,
                  { selectedCourse: string }
                >["selectedCourse"],
                { shouldValidate: true }
              );
              setSelectedCourse(value);
            }}
            value={selectedCourse}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="Course 1">Course 1</SelectItem>
              <SelectItem value="Course 2">Course 2</SelectItem>
              <SelectItem value="Course 3">Course 3</SelectItem>
            </SelectContent>
          </Select>
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
  );
};

export default Application;
