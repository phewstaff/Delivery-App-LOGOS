import { z } from "zod";

export const clientSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),

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

  mobileNumber: z.string().min(2, {
    message: "mobile number must be at least 2 characters.",
  }),

  city: z.string().min(2, {
    message: "city must be at least 2 characters.",
  }),
});
