 import * as Yup from 'yup'

 export const Validation = Yup.object({
    name: Yup.string().min(3).required("Please enter name"),
    email:Yup.string().email("Please enter valid email").required("Please enter email "),
    password: Yup.string().min(5).required("Please enter password"),
    confirmpassword: Yup.string().oneOf([Yup.ref("password")], "Password not matched")

 })