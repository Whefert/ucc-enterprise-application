import React from "react";
import { Outlet } from "react-router-dom";
import MainNav from "../navigation/MainNav";

function MainLayout() {
  return (
    <div className="flex flex-col justify-start">
      <MainNav />
      <Outlet />
    </div>
  );
}

export default MainLayout;
