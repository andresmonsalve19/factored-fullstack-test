import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {getEmployeeById} from "../api/employees.api";
import Skills from "../components/Skills";

function ProfilePage() {
    const {id} = useParams();
    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        const fetchEmployee = async () => {
            const employeeData = await getEmployeeById(id);
            setEmployee(employeeData);
        };
        fetchEmployee();
    }, [id]);

    if (!employee) {
        return <div>Loading...</div>;
    }

    return (
        <div className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto">
            <h1 className="text-3xl font-bold text-center mb-2">
                {employee.name}
            </h1>
            <h2 className="text-xl font-bold text-center mb-5">
                {employee.position}
            </h2>
            <h2 className="text-lg mb-2 font-bold text-center mb-5">
                {employee.description}
            </h2>
            <h2 className="text-lg font-bold mb-2">Contact:</h2>
            <h3 className="font-semibold">Email: {employee.email}</h3>
            <h3 className="font-semibold mb-5">Phone: {employee.phone}</h3>
            <h2 className="text-xl font-bold text-center">Skills:</h2>

            <Skills skills={employee.skills} ratings={employee.ratings} />
        </div>
    );
}

export default ProfilePage;
