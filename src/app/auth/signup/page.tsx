"use client";

import React, { useState } from "react";
import { FaGem } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BiLock } from "react-icons/bi";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

const Signup = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        agreeToTerms: false,
    });
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleInputChange = (e: any) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);

        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match");
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post('/api/auth/signup', formData);
            if (response?.data?.success) {
                toast.success('Account created successfully');
                router.push('/auth/login'); // Redirect to login page
            } else {
                toast.error(response?.data?.message || 'Signup failed');
            }
        } catch (error) {
            console.error('Signup error:', error);
            toast.error('An error occurred during signup');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex">
            {/* Left side with illustration and content */}
            <div className="w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 flex flex-col items-center justify-center p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full">
                    <svg
                        className="absolute right-0 top-1/4 text-white/10"
                        width="404"
                        height="384"
                        fill="none"
                        viewBox="0 0 404 384"
                    >
                        <defs>
                            <pattern
                                id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                                x="0"
                                y="0"
                                width="20"
                                height="20"
                                patternUnits="userSpaceOnUse"
                            >
                                <rect
                                    x="0"
                                    y="0"
                                    width="4"
                                    height="4"
                                    className="text-slate-400"
                                    fill="currentColor"
                                />
                            </pattern>
                        </defs>
                        <rect
                            width="404"
                            height="384"
                            fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
                        />
                    </svg>
                </div>
                <div className="relative z-10 flex flex-col items-center justify-center text-center">
                    <span>
                        <FaGem className="text-7xl text-white mb-8" />
                    </span>
                    <h1 className="text-4xl font-bold text-white mb-6">Diamond Elite</h1>
                    <p className="text-xl text-white/80 max-w-md">
                        Experience the luxury of premium services with Diamond Elite membership.
                    </p>
                </div>
            </div>

            {/* Right side with signup form */}
            <div className="w-1/2 bg-white flex items-center justify-center p-12">
                <div className="max-w-md w-full space-y-8">
                    <div className="text-center">
                        <h2 className="mt-6 text-3xl font-bold text-gray-900">Create Your Account</h2>
                        <p className="mt-2 text-gray-600">Join us to get started</p>
                    </div>

                    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                        <div>
                            <label
                                htmlFor="username"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Username
                            </label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                required
                                value={formData.username}
                                onChange={handleInputChange}
                                className="mt-1 block w-full px-4 py-3 text-black rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-300"
                                placeholder="Enter your username"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email Address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                                className="mt-1 block w-full px-4 py-3 text-black rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-300"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    required
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full px-4 py-3 text-black rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-300"
                                    placeholder="Enter your password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                >
                                    {showPassword ? (
                                        <AiOutlineEyeInvisible size={20} />
                                    ) : (
                                        <AiOutlineEye size={20} />
                                    )}
                                </button>
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="confirmPassword"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Confirm Password
                            </label>
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type={showPassword ? "text" : "password"}
                                required
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                className="mt-1 block w-full px-4 py-3 text-black rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-300"
                                placeholder="Confirm your password"
                            />
                        </div>

                        <div className="flex items-center">
                            <input
                                id="agreeToTerms"
                                name="agreeToTerms"
                                type="checkbox"
                                checked={formData.agreeToTerms}
                                onChange={handleInputChange}
                                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <label
                                htmlFor="agreeToTerms"
                                className="ml-2 block text-sm text-gray-700"
                            >
                                I agree to the{" "}
                                <a href="#" className="text-blue-600 hover:text-blue-500">
                                    terms and conditions
                                </a>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300 text-sm font-medium"
                        >
                            {loading ? "Creating Account..." : "Sign Up"}
                        </button>
                    </form>

                    <div className="flex items-center justify-center text-sm text-gray-600">
                        <BiLock className="mr-1" />
                        <p>Protected by enterprise-grade security</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;