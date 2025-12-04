import type React from "react";
import z from "zod";

export const basicInformationSchema = z.object({
    studentId: z.string().optional(),
    memberSince: z.string().optional(),
    subscriptionStatus: z.enum(['sunscribed', 'unsubscribed', 'expired']),
    managedType: z.string(),
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid mail"),
    countryCode: z.string().default("+91"),
    phoneNumber: z.string().min(10, "phone invalid"),
    dateOfBirth: z.string().refine((date) => new Date(date).toString() !== 'Invalid Date', { message: "Valid date required" }),
    gender: z.enum(["male", 'female', 'others']),
    currentCountry: z.enum(['India', 'Other']),
    currentState: z.string().min(1, "State required"),
    citizenShip: z.enum(["Indian", "other"]),
    accountType: z.string().min(1, "Account type required"),
    address: z.string().min(5, "Address required")
})
export const studentsDocumentSchema = z.object({
    uploadOnBehalf: z.enum(["1", '2']),
    category: z.enum(["1", '2']),
    sunCategory: z.enum(["1", '2']),
    documentOriginCountry: z.enum(["India,other"]),
    file: z.any().refine((file) => file instanceof File, "A file is required").optional()
})
export const checklistSchema = z.object({
    selectedCourse: z.enum(["1", '2'])
})
export const previsachecklistSchema = z.object({
    selectedCourse: z.enum(["1", '2'])
})
export const visachecklistSchema = z.object({
    selectedCourse: z.enum(["1", '2'])
})

export type BasicInfo = z.infer<typeof basicInformationSchema>;
export type StudentDoc = z.infer<typeof studentsDocumentSchema>;
export type CheckList = z.infer<typeof checklistSchema>;
export type PreVisaList = z.infer<typeof previsachecklistSchema>;
export type VisaList = z.infer<typeof visachecklistSchema>;

export type StepFormData = BasicInfo | StudentDoc | CheckList | PreVisaList | VisaList;
export type AllFormField = BasicInfo & StudentDoc & CheckList & PreVisaList | VisaList;
export interface Step {
    id: string;
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    schema: z.ZodSchema<any>;
    label: string;
}
