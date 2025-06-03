import z from "zod";

export const profileSchema = z.object({
  company: z.string().min(1, { message: "Company required" }),
  phone: z.string().min(1, { message: "No Telp required" }),
  address: z.string().min(1, { message: "address required" }),

  image: z
    .any()
    .refine((files) => files instanceof FileList && files.length > 0, {
      message: "Input file",
    })
    .refine(
      (files) =>
        ["image/png", "image/jpg", "image/jpeg"].includes(files[0]?.type),
      { message: "Invalid image file type" }
    ),
});

export type profileDTO = z.infer<typeof profileSchema>;
