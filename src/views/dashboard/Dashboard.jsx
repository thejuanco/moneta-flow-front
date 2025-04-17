import React from "react";
import { Outlet } from "react-router";

//Importar componentes
import Sidebard from "./components/home/Sidebard";
import NavBar from "./components/home/NavBar";

const Dashboard = () => {
  return (
    <>
      <div className="app-layout flex h-screen">
        <aside className="w-64 p-4 border">
          <Sidebard />
        </aside>

        <div className="flex-1 flex flex-col">
          <NavBar />
          <main className="flex-1 p-4">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
