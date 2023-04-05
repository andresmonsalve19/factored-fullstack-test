import { Link } from "react-router-dom";


function HomePage() {
    return (
        <div className="mx-auto">
            <h1 className="text-center text-5xl uppercase font-bold  text-white mt-20">
                Factored Fullstack Test
            </h1>
            <h3 className="text-center text-2xl font-bold  text-white mt-20">
                Jaime Andres Monsalve Ballesteros
            </h3>
            <Link to='/login' className="block w-1/2 text-white rounded-lg bg-indigo-400 text-center mt-20 text-2xl font-bold mx-auto">Start</Link>
        </div>
    );
}

export default HomePage;