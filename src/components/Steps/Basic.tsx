import type { useForm } from "react-hook-form";
import type { StepFormData } from "../../types";
import FormField from "../FormField";
import { Label } from "../ui/label";
import { useState } from "react";
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
const Basic = ({ register, errors, setValue }: StepProps) => {
  const [subscriptionType, setSubscriptionType] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [currentState, setCurrentState] = useState("");
  const [citizen, setCitizen] = useState("");
  return (
    <div className="space-y-4">
      <p className="text-sm ">
        You can view your students who doesn’t have access to Zusammen.
      </p>
      <h3 className="text-sm px-4 py-2 bg-gray-100 w-fit rounded-md mt-8">
        Student Account Details
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <FormField
            id="studentId"
            label="Student ID"
            register={register}
            errors={errors}
            placeholder="apc/2025/10380"
            disabled={true}
          />
        </div>
        <div>
          <FormField
            id="memberSince"
            label="Member Since"
            register={register}
            errors={errors}
            disabled={true}
            placeholder="2025-07-25"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="subscriptionType">Subscription Type</Label>
          <Select
            onValueChange={(value) => {
              setValue?.(
                "subscriptionStatus",
                value as Extract<
                  StepFormData,
                  { subscriptionType: string }
                >["subscriptionStatus"],
                { shouldValidate: true }
              );
              setSubscriptionType(value);
            }}
            value={subscriptionType}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Subscribed" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="subscribed">Subscribed</SelectItem>
              <SelectItem value="unsubscribed">Unsubscribed</SelectItem>
              <SelectItem value="expired">Expired</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <FormField
            id="managedType"
            label="Managed Type"
            register={register}
            errors={errors}
            placeholder="Managed by Agency (B2B Agent)"
            disabled={true}
          />
        </div>
      </div>
      <div className="border border-gray-300 mt-6"></div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <FormField
            id="firstName"
            label="First Name"
            register={register}
            errors={errors}
            placeholder="Aman"
          />
        </div>
        <div>
          <FormField
            id="lastName"
            label="Last Name"
            register={register}
            errors={errors}
            placeholder="Deshmukh"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <FormField
            id="email"
            label="Student Email Address"
            register={register}
            errors={errors}
            placeholder="amandesmuk@gmail.com"
          />
        </div>
        <div className="grid grid-cols-2 ">
          <div className="w-32">
            <FormField
              id="countryCode"
              label="Country Code"
              register={register}
              errors={errors}
              placeholder="+91"
              disabled={true}
            />
          </div>
          <div>
            <FormField
              id="phoneNumber"
              label="Phone Number"
              register={register}
              errors={errors}
              placeholder="9812345678"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <FormField
            id="dateOfBirth"
            label="Date of Birth "
            type="date"
            register={register}
            errors={errors}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="gender">
            Gender
            <span className="text-red-500">*</span>
          </Label>
          <Select
            onValueChange={(value) => {
              setValue?.(
                "gender",
                value as Extract<StepFormData, { gender: string }>["gender"],
                { shouldValidate: true }
              );
              setGender(value);
            }}
            value={gender}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a Gender" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="others">Others</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="currentCountry">
            Student Currently Living in the Country
            <span className="text-red-500">*</span>
          </Label>
          <Select
            onValueChange={(value) => {
              setValue?.(
                "currentCountry",
                value as Extract<
                  StepFormData,
                  { currentCountry: string }
                >["currentCountry"],
                { shouldValidate: true }
              );
              setCountry(value);
            }}
            value={country}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select your Country" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="India">India</SelectItem>
              <SelectItem value="Other">Others</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="currentState">
            Student Currently Living in the State
            <span className="text-red-500">*</span>
          </Label>
          <Select
            onValueChange={(value) => {
              setValue?.(
                "currentState",
                value as Extract<
                  StepFormData,
                  { currentState: string }
                >["currentState"],
                { shouldValidate: true }
              );
              setCurrentState(value);
            }}
            value={currentState}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select your State" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="karnataka">Karnataka</SelectItem>
              <SelectItem value="maharastra">Maharastra</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <div className="flex flex-col ">
          <div className="space-y-2">
            <Label htmlFor="citizenShip">
              Student Current Citizenship
              <span className="text-red-500">*</span>
            </Label>
            <Select
              onValueChange={(value) => {
                setValue?.(
                  "citizenShip",
                  value as Extract<
                    StepFormData,
                    { citizenShip: string }
                  >["citizenShip"],
                  { shouldValidate: true }
                );
                setCitizen(value);
              }}
              value={citizen}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Citizenship" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="Indian">Indian</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <h3 className="text-sm px-4 py-2 bg-gray-100 w-fit rounded-md mt-4">
          Additional Contact Details
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <FormField
            id="accountType"
            label="Account Type"
            register={register}
            errors={errors}
            placeholder="Account"
          />
        </div>
        <div>
          <FormField
            id="address"
            label="Address"
            register={register}
            errors={errors}
            placeholder="Address"
          />
        </div>
      </div>
    </div>
  );
};

export default Basic;
