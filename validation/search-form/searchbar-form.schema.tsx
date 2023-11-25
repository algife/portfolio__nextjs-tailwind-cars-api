import { fuels, manufacturers, yearsOfProduction } from "@/config/constants";
import { z } from "zod";

const SearchBarValidationSchema = z
  .object({
    manufacturer: z
      .string()
      .min(3, "Manufacturer is too short!")
      .max(70, "Manufacturer is too long!")
      .refine((m) => (manufacturers as string[]).includes(m), {
        message: "Invalid Manufacturer",
      }),
    model: z
      .string()
      .min(3, "Model is too short!")
      .max(70, "Model is too long!"),
    fuel: z.string().refine((f) => (fuels as string[]).includes(f), {
      message: "Invalid Fuel",
    }),
    year: z
      .number()
      .refine(
        (nStr) =>
          Number.parseInt(`${nStr}`, 10) > Math.min(...yearsOfProduction) &&
          Number.parseInt(`${nStr}`, 10) < Math.max(...yearsOfProduction),
        { message: "Invalid year!" }
      ),
  })
  // Allow some field to be undefined
  .partial();
export default SearchBarValidationSchema;
