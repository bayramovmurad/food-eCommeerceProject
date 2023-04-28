import { registerSchema } from "@/schema/Register";
import { useFormik } from "formik";
import Input from "@/components/from/Input";
import Title from "@/components/ui/Title";
import Link from "next/link";

const Register = () => {
    const onSubmit = async (values, actions) => {
        await new Promise((resolve) =>
            setTimeout(resolve, 4000));
        actions.resetForm();
    };

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        onSubmit,
        validationSchema: registerSchema,
    });

    const inputs = [
        {
            id: 1,
            name: "fullName",
            type: "text",
            placeholder: "Your Full Name",
            value: values.fullName,
            errorMessage: errors.fullName,
            touched: touched.fullName,
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Your Email Address",
            value: values.email,
            errorMessage: errors.email,
            touched: touched.email,
        },
        {
            id: 3,
            name: "password",
            type: "password",
            placeholder: "Your Password",
            value: values.password,
            errorMessage: errors.password,
            touched: touched.password,
        },
        {
            id: 4,
            name: "confirmPassword",
            type: "password",
            placeholder: "Your Password Again",
            value: values.confirmPassword,
            errorMessage: errors.confirmPassword,
            touched: touched.confirmPassword,
        },
    ];


    return (
        <div className="container mx-auto">
            <form action="" className="flex flex-col items-center my-20 w-full mx-auto md:w-1/2" onSubmit={handleSubmit}>
                <Title addClass="text-[40px] uppercase">
                    Register
                </Title>
                <div className="flex flex-col gap-y-3 w-full">
                    {
                        inputs.map((input) => (
                            <Input
                                key={input.id}
                                {...input}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        ))
                    }
                </div>
                <div className="flex flex-col w-full gap-y-3 mt-6">
                    <button className="btn-primary uppercase">
                        Register
                    </button>
                    <Link href="/auth/Login">
                        <span className="text-sm underline cursor-pointer text-secondary">
                            Do you have a account?
                        </span>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Register