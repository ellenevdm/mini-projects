import { z } from "zod";

const twoDecimalRe = /^\d+(\.\d{1,2})?$/;

export const tipCalculatorSchema = z.object({
  bill: z.number().min(0, { message: "Bill must be a positive number" }),
  customTip: z.union([z.string().length(0), z.coerce.number()]),
  numberOfPeople: z.number().min(1, { message: "Can't be zero" }),
});

export type TipCalculatorSchema = z.infer<typeof tipCalculatorSchema>;
