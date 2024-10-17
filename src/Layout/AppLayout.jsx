import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

export default function AppLayout() {
  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleSidebar = () => setOpenSidebar((prev) => !prev);
  const closeSidebar = () => setOpenSidebar(false);

  return (
    <div className="bg-bgColor">
      <div className="flex">
        <Sidebar
          openSidebar={openSidebar}
          closeSidebar={closeSidebar}
          setOpenSidebar={setOpenSidebar}
        />
        <div className="w-full md:w-[calc(100%-300px)]">
          <Header toggleSidebar={toggleSidebar} />
          <main className="h-[calc(100vh-113px)]  overflow-auto bg-[#FFFFFF] p-[20px]">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
