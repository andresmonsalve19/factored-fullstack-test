import {Form, Formik} from "formik";
import {createLoginRequest} from "../api/employees.api";
import {useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";

function LoginPage() {
    const navigate = useNavigate();
    const [id, setId] = useState(0);

    useEffect(() => {
        if (id !== 0) {
            navigate(`/profile/${id}`);
        }
    }, [id, navigate]);

    return (
        <div className="mt-20">
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                onSubmit={async (values, actions) => {
                    console.log(values);
                    try {
                        const response = await createLoginRequest(values);
                        setId(parseInt(response.data.id));
                        console.log(response.data.id);
                        actions.resetForm();
                    } catch (error) {
                        console.log(error);
                    }
                }}
            >
                {({handleChange, handleSubmit, values, isSubmitting}) => (
                    <Form
                        onSubmit={handleSubmit}
                        className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto"
                    >
                        <h1 className="text-xl font-bold uppercase text-center">Sign in</h1>
                        <label className="block font-bold mt-2">Email</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter you email"
                            onChange={handleChange}
                            value={values.email}
                            className="px-2 py-1 rounded-sm w-full mt-2"
                        />
                        <label className="block font-bold mt-2">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            onChange={handleChange}
                            value={values.password}
                            className="px-2 py-1 rounded-sm w-full mt-2"
                        />
                        <button type="submit" className="block bg-indigo-500 px-2 py-1 text-white w-full rounded-md mt-6">
                            {isSubmitting ? "entering..." : "Login"}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default LoginPage;
