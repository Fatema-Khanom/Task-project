import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";

const MainLayout = () => {
  return (
    <div className="bg-[#05091D] h-screen flex">
      <Sidebar />
      <div className="flex-grow ml-[20%] overflow-y-auto ">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;