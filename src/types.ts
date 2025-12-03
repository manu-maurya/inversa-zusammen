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
    gender: z.enum(["male", 'female', 'others']),
    currentCountry: z.enum(['India', 'Other']),
    currentState: z.string().min(1, "State required"),
    citizenShip: z.enum(["Indian", "other"]),
    accountType: z.enum([]),
    address: z.string().min(5, "Address required")
})
export const studentsDocumentSchema = z.object({
    uploadOnBehalf: z.enum([]),
    category: z.enum([]),
    sunCategory: z.enum([]),
    documentOriginCountry: z.enum(["India,other"]),
    file: z.any().refine((file) => file instanceof File, "A file is required").optional()
})
export const checklistSchema = z.object({
    selectedCourse: z.enum([])
})

export type BasicInfo = z.infer<typeof basicInformationSchema>;
export type StudentDoc = z.infer<typeof studentsDocumentSchema>;
export type CheckList = z.infer<typeof checklistSchema>;

export type StepFormData = BasicInfo | StudentDoc | CheckList;
export type AllFormField = BasicInfo & StudentDoc & CheckList;
export interface Step {
    id: string;
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    schema: z.ZodSchema<any>;
}