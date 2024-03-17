import { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

function AppLayout() {
  const [openSidebar, setOpenSidebar] = useState(false);

  const tggleSidebar = () => setOpenSidebar((prev) => !prev);
  const closeSidebar = () => setOpenSidebar(false);

  return (
    <div className="bg-bgColor">
      <div className="flex min-h-[calc(100vh-113px)]">
        <Sidebar
          openSidebar={openSidebar}
          closeSidebar={closeSidebar}
          setOpenSidebar={setOpenSidebar}
        />
        <div className="w-full">
          <Header tggleSidebar={tggleSidebar} />
          <main className="min-h-[calc(100vh-113px)] bg-[#FFFFFF] p-[20px]">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
