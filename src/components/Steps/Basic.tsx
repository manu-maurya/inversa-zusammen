import type { useForm } from "react-hook-form";
import type { StepFormData } from "../../types";

interface StepProps {
  register: ReturnType<typeof useForm<StepFormData>>["register"];
  errors: Record<string, { message?: string }>;
  setValue?: ReturnType<typeof useForm<StepFormData>>["setValue"];
}
const Basic = ({ register, errors }: StepProps) => {
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
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Student ID <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="studentId"
            {...errors}
            {...register("studentId")}
            disabled
            placeholder="apc/2025/10380"
            className="w-full rounded-md border border-gray-400 px-4 py-2 font-bold text-sm outline-none focus:border-black focus:ring-1 focus:ring-gray-800"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Member Since <span className="text-red-500">*</span>
          </label>
          <input
            // type="date"
            disabled
            id="memberSince"
            {...register("memberSince")}
            placeholder="2025-07-25"
            className="w-full rounded-md border font-bold border-gray-400 px-4 py-2 text-sm outline-none focus:border-black focus:ring-1 focus:ring-gray-800"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Subscription Status <span className="text-red-500">*</span>
          </label>
          {/* <select
            {...register("subscriptionStatus")}
            className={inputClass(!!errors.subscriptionStatus)}
          >
            <option value="Subscribed">Subscribed</option>
            <option value="Unsubscribed">Unsubscribed</option>
            <option value="Expired">Expired</option>
          </select> */}
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Managed Type <span className="text-red-500">*</span>
          </label>
          <input
            id="managedType"
            disabled
            {...register("managedType")}
            placeholder="Managed by Agency (B2B Agent)"
            className="w-full rounded-md border border-gray-400 px-4 py-2 text-sm outline-none focus:border-black focus:ring-1 focus:ring-gray-800"
          />
        </div>
      </div>
      <div className="border border-gray-300 mt-6"></div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Student First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            {...register("firstName")}
            placeholder="Aman"
            className="w-full rounded-md border border-gray-400 px-4 py-2 text-sm outline-none focus:border-black focus:ring-1 focus:ring-gray-800"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Student Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            {...register("lastName")}
            placeholder="Deshmukh"
            className="w-full rounded-md border border-gray-400 px-4 py-2 text-sm outline-none focus:border-black focus:ring-1 focus:ring-gray-800"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Student Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            placeholder="amandesmuk@gmail.com"
            className="w-full rounded-md border border-gray-400 px-4 py-2 text-sm outline-none focus:border-black focus:ring-1 focus:ring-gray-800"
          />
        </div>
        <div className="grid grid-cols-2 ">
          <div className="w-36">
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Country Code <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="countryCode"
              {...register("countryCode")}
              disabled
              placeholder="+91"
              className="w-full rounded-md border border-gray-400 px-4 py-2 text-sm outline-none focus:border-black focus:ring-1 focus:ring-gray-800"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              {...register("phoneNumber")}
              id="phoneNumber"
              placeholder="Example"
              className="w-full rounded-md border border-gray-400 px-4 py-2 text-sm outline-none focus:border-black focus:ring-1 focus:ring-gray-800"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Date of Birth <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            {...register("dateOfBirth")}
            id="dateOfBirth"
            placeholder="Example"
            className="w-full rounded-md border border-gray-400 px-4 py-2 text-sm outline-none focus:border-black focus:ring-1 focus:ring-gray-800"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Gender <span className="text-red-500">*</span>
          </label>
          <input
            id="gender"
            {...register("countryCode")}
            placeholder="Male"
            className="w-full rounded-md border border-gray-400 px-4 py-2 text-sm outline-none focus:border-black focus:ring-1 focus:ring-gray-800"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Student Currently Living in the Country{" "}
            <span className="text-red-500">*</span>
          </label>
          <input
            id="currentCountry"
            {...register("currentCountry")}
            placeholder="India"
            className="w-full rounded-md border border-gray-400 px-4 py-2 text-sm outline-none focus:border-black focus:ring-1 focus:ring-gray-800"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Student Currently Living in the State{" "}
            <span className="text-red-500">*</span>
          </label>
          <input
            id="currentState"
            {...register("currentState")}
            placeholder="Karnataka"
            className="w-full rounded-md border border-gray-400 px-4 py-2 text-sm outline-none focus:border-black focus:ring-1 focus:ring-gray-800"
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col ">
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Student Current Citizenship <span className="text-red-500">*</span>
          </label>
          <input
            id="citizenShip"
            {...register("citizenShip")}
            placeholder="Indian"
            className="w-full rounded-md border border-gray-400 px-4 py-2 text-sm outline-none focus:border-black focus:ring-1 focus:ring-gray-800"
          />
        </div>
        <h3 className="text-sm px-4 py-2 bg-gray-100 w-fit rounded-md mt-4">
          Additional Contact Details
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Account Type <span className="text-red-500">*</span>
          </label>
          <input
            id="accountType"
            {...register("accountType")}
            placeholder="Account name"
            className="w-full rounded-md border border-gray-400 px-4 py-2 text-sm outline-none focus:border-black focus:ring-1 focus:ring-gray-800"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Address <span className="text-red-500">*</span>
          </label>
          <input
            id="address"
            {...register("address")}
            placeholder="address"
            className="w-full rounded-md border border-gray-400 px-4 py-2 text-sm outline-none focus:border-black focus:ring-1 focus:ring-gray-800"
          />
        </div>
      </div>
    </div>
  );
};

export default Basic;
