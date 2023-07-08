import { z } from "zod";

export const clientSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),

  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),

  mobileNumber: z.string().min(2, {
    message: "mobile number must be at least 2 characters.",
  }),

  city: z.string().min(2, {
    message: "city must be at least 2 characters.",
  }),
});

export const restaurantSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),

  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),

  mobileNumber: z.string().min(2, {
    message: "mobile number must be at least 2 characters.",
  }),

  city: z.string().min(2, {
    message: "city must be at least 2 characters.",
  }),
});

export const signUpSchema = z.object({
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),

  phone: z.string().min(2, {
    message: "mobile number must be at least 2 characters.",
  }),

  mail: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),

  city: z.string().min(2, {
    message: "city must be at least 2 characters.",
  }),

  address: z.string().min(1, {
    message: "this field has to be filled",
  }),

  password: z.string().min(1, {
    message: "this field has to be filled",
  }),
});
