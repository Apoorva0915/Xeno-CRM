import { FaSignOutAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";

const Navbar = () => {
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
    <nav className="bg-gradient-to-r from-[#002d9c] to-[#001d6d] text-white sticky top-0 w-full z-10 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6 h-16">
        <div className="flex items-center gap-3">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-300">
            <path fillRule="evenodd" d="M10.817 1.757a.75.75 0 011.366 0l7.5 7.5a.75.75 0 01-1.06 1.06L12 3.81V17.25a.75.75 0 01-1.5 0V3.81L4.56 10.32a.75.75 0 01-1.06-1.06l7.5-7.5z" clipRule="evenodd" />
          </svg>
          <h1 className="text-xl font-semibold tracking-tight">XENO CRM</h1>
        </div>

        {/* Show profile + logout on small screens when sidebar is hidden */}
        <div className="md:hidden flex items-center gap-4">
          <img
            src={user?.profilePic || "/icons/user.png"}
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover border border-white/20 shadow"
            onError={(e) => (e.target.src = "/icons/user.png")}
          />
          <button
            onClick={handleLogout}
            className="p-2 rounded-md text-gray-300 hover:text-red-400 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-1 transition-colors duration-200"
          >
            <FaSignOutAlt className="w-6 h-6" />
            <span className="sr-only">Logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
