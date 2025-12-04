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
import FormField from "../FormField";

interface StepProps {
  register: ReturnType<typeof useForm<StepFormData>>["register"];
  errors: Record<string, { message?: string }>;
  setValue?: ReturnType<typeof useForm<StepFormData>>["setValue"];
}
const Docs = ({ register, errors, setValue }: StepProps) => {
  const [uploadOnBehalf, setUploadOnBehalf] = useState("");
  const [category, setcategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [documentOriginCountry, SetDocumentOriginCountry] = useState("");
  // const [document, setDocument] = useState("");
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
        <div className="space-y-2">
          <Label htmlFor="uploadOnBehalf">
            Upload on Behalf
            
          </Label>
          <Select
            onValueChange={(value) => {
              setValue?.(
                "uploadOnBehalf",
                value as Extract<
                  StepFormData,
                  { uploadOnBehalf: string }
                >["uploadOnBehalf"],
                { shouldValidate: true }
              );
              setUploadOnBehalf(value);
            }}
            value={uploadOnBehalf}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="student">Student</SelectItem>
              <SelectItem value="teacher">Teacher</SelectItem>
              <SelectItem value="other">Others</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="category">
            Document Category
            
          </Label>
          <Select
            onValueChange={(value) => {
              setValue?.(
                "category",
                value as Extract<
                  StepFormData,
                  { category: string }
                >["category"],
                { shouldValidate: true }
              );
              setcategory(value);
            }}
            value={category}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="student">Student</SelectItem>
              <SelectItem value="teacher">Teacher</SelectItem>
              <SelectItem value="other">Others</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="subCategory">
            Document Sub-Category
            
          </Label>
          <Select
            onValueChange={(value) => {
              setValue?.(
                "subCategory",
                value as Extract<
                  StepFormData,
                  { subCategory: string }
                >["subCategory"],
                { shouldValidate: true }
              );
              setSubCategory(value);
            }}
            value={subCategory}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="student">Student</SelectItem>
              <SelectItem value="teacher">Teacher</SelectItem>
              <SelectItem value="other">Others</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="documentOriginCountry">
            Document Category
            
          </Label>
          <Select
            onValueChange={(value) => {
              setValue?.(
                "documentOriginCountry",
                value as Extract<
                  StepFormData,
                  { documentOriginCountry: string }
                >["documentOriginCountry"],
                { shouldValidate: true }
              );
              SetDocumentOriginCountry(value);
            }}
            value={documentOriginCountry}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="India">India</SelectItem>
              <SelectItem value="other">Others</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <FormField
          id="file"
          label="Choose File"
          register={register}
          errors={errors}
        />
      </div>
    </div>
  );
};

export default Docs;
