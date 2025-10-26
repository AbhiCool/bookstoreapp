import React, { useContext } from "react";
import { AppContext } from "../context/AppProvider";
import toast from "react-hot-toast";

const Logout = () => {
  const { setUser } = useContext(AppContext);
  const handleLogout = () => {
    try {
      localStorage.removeItem("Users");
      setUser(null);

      setTimeout(() => {
        window.location.reload();
      }, 2000);

      toast.success("Logout Successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <button className="btn btn-error" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;
