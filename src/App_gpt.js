import React, { createContext, useContext, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => {
        setIsLoggedIn(true);
    };

    const logout = () => {
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    return useContext(AuthContext);
}

function PrivateRoute({ element, ...rest }) {
    const { isLoggedIn } = useAuth();

    return isLoggedIn ? (
        <Route {...rest} element={element} />
    ) : (
        <Navigate to="/login" />
    );
}

function Home() {
    return <h1>Home Page</h1>;
}

function About() {
    return <h1>About Page</h1>;
}

function Login() {
    const { login } = useAuth();

    const handleLogin = () => {
        login();
    };

    return (
        <>
            <h1>Login Page</h1>
            <button onClick={handleLogin}>Log In</button>
        </>
    );
}

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
