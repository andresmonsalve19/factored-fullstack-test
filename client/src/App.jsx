import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/Navbar";
import NotFoundProfilePage from "./pages/NotFoundEmployee";

function App() {
    return (
        <div className="bg-zinc-900 h-screen">
            <Navbar />
            <div className="container mx-auto py-4">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/profile/:id" element={<ProfilePage />} />
                    <Route
                        path="/profile/NaN"
                        element={<NotFoundProfilePage />}
                    />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
