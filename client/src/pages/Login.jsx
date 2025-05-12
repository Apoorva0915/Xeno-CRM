import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

function Login() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-r from-[#002d9c] to-[#001d6d]">
                
                {/* Background Decorations */}
                <div className="absolute inset-0 opacity-20">
                    <div className="w-96 h-96 bg-purple-400 rounded-full absolute -top-20 -left-20 blur-3xl"></div>
                    <div className="w-72 h-72 bg-pink-500 rounded-full absolute bottom-10 right-10 blur-2xl"></div>
                    <div className="w-80 h-80 bg-blue-200 rounded-full absolute top-40 left-32 blur-2xl"></div>
                </div>

                <motion.div
                    className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-sm text-center relative z-10"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-bold mb-4 text-gray-800">
                        Welcome Back
                    </h1>
                    <p className="mb-6 text-gray-500">
                        Login to continue to your account
                    </p>

                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="w-60 mx-auto mt-5 flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md"
                    >
                        <img
                            src="https://www.svgrepo.com/show/355037/google.svg"
                            alt="Google"
                            className="w-6 h-6"
                        />
                        <a
                            href={`${import.meta.env.VITE_BACKEND_URL}/api/auth/google`}
                            className="hover:underline"
                        >
                            Continue With Google
                        </a>
                    </motion.button>
                </motion.div>
            </div>
        </>
    );
}

export default Login;