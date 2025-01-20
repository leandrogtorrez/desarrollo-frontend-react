import { useState } from "react";

const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const resetForm = () => {
        setValues(initialValues); // Restablece los valores a los valores iniciales
    };

    return [values, handleChange, resetForm]; // Devuelve también la función resetForm
};

export default useForm;
