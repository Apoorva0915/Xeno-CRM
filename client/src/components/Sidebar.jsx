import React, { useEffect, useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

const navItems = [
    { label: "Dashboard", icon: "/icons/dashboard.svg", path: "/dashboard" },
    { label: "Data Ingestion", icon: "/icons/user.png", path: "/ingestion" },
    { label: "Order List", icon: "/icons/order.png", path: "/orders" },
    { label: "Campaign Creation", icon: "/icons/campaign.png", path: "/create-campaign" },
    { label: "Campaign History", icon: "/icons/history.png", path: "/campaign-history" },
    { label: "AI Suggestions", icon: "/icons/AI.png", path: "/ai-suggestions" },
];

function Sidebar() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/auth/user`, {
                    withCredentials: true,
                });
                setUser(response.data);
            } catch (error) {
                console.error("Error fetching user:", error.response?.status, error.response?.data || error.message);
            }
        };
        getUser();
    }, []);

    const handleLogout = async () => {
        try {
            await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/auth/logout`, {
                withCredentials: true,
            });
            window.location.href = "/";
        } catch (error) {
            console.error("Logout failed:", error.response?.data || error.message);
        }
    };

    return (
        <div className="w-64 bg-gradient-to-b from-[#002d9c] to-[#001d6d] text-white p-4 flex flex-col justify-between overflow-y-auto shadow-xl transition-all duration-300">
            <div>
                <h2 className="text-3xl font-extrabold text-center text-indigo-100 mb-6">My Dashboard</h2>
                <ul className="space-y-4">
                    {navItems.map((item, index) => (
                        <Link to={item.path}>
                            <li
                                key={index}
                                className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-indigo-500 hover:scale-105 transition-transform duration-200"
                            >
                                <img src={item.icon} alt={item.label} className="w-8 h-8" />
                                <p className="flex-1 text-md font-semibold">{item.label}</p>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>

            <div className="border-t border-gray-700 pt-6 flex items-center gap-4">
                <img
                    src={user?.profilePic || "/icons/user.png"}
                    onError={(e) => (e.target.src = "/icons/user.png")}
                    alt="Profile"
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                />
                <div className="flex-1">
                    <p className="text-sm font-medium truncate text-gray-300">
                        {user?.name || "Guest User"}
                    </p>
                </div>
                <FaSignOutAlt
                    className="w-6 h-6 cursor-pointer text-white hover:text-red-400 transition-colors duration-200"
                    onClick={handleLogout}
                />
            </div>
        </div>
    );
}

export default Sidebar;
