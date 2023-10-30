import * as yup from "yup";

export const profileFormSchema = yup.object({
  city: yup.string().optional(),
});
