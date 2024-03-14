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
      <Header tggleSidebar={tggleSidebar} />
      <div className="flex min-h-[calc(100vh-113px)]">
        <Sidebar
          openSidebar={openSidebar}
          closeSidebar={closeSidebar}
          setOpenSidebar={setOpenSidebar}
        />
        <main className="w-full bg-sky p-[20px]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
