import * as Yup from "yup";

export const productionSchema = Yup.object().shape({
    title: Yup.string()
        .required("Title is required")
        .min(3, "Title must be at least 3 characters long"),
    description: Yup.string().required('Description is required')
        .max(255, "Description must be 255 characters or less"),
    price: Yup.number()
        .required("Price is required")
        .positive("Price must be a positive number")
        .typeError("Price must be a valid number"),
});


