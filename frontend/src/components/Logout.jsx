import React, { useContext } from "react";
import { AppContext } from "../context/AppProvider";
import toast from "react-hot-toast";
import axiosInstance from "../utils/axiosInstance";
import { useState } from "react";

const Logout = () => {
  const [loading, setLoading] = useState(false);
  const { setUser } = useContext(AppContext);
  const handleLogout = async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.get("/api/auth/logout");

      localStorage.removeItem("Users");
      setUser(null);

      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button disabled={loading} className="btn btn-error" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;
