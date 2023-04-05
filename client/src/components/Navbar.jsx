import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="bg-neutral-700 flex justify-between px-10 py-4">
            <Link to="/" className="bg-slate-200 px-2 py-1 rounded-md">
                Home
            </Link>
            <ul className="flex gap-x-1">
                <li>
                    <Link
                        to="/login"
                        className="bg-slate-200 rounded-md px-2 py-1"
                    >
                        Login
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
