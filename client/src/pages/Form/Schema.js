import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter valid email address")
    .required("Please enter email address"),
  password: Yup.string()
    .min(8, "Password must be greater than 8 characters")
    .required("Please enter password"),
  grade: Yup.number().oneOf([11, 12]),
  stream: Yup.string().oneOf(["Science", "Management"]),
  role: Yup.string().oneOf(["Admin", "Student", "Teacher"]),
  name: Yup.string().required("Please enter your name"),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter valid email address")
    .required("Please enter email address"),
  password: Yup.string()
    .min(8, "Password must be greater than 8 characters")
    .required("Please enter password"),
});
