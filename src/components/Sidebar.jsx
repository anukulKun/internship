import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { icons, sideBarRouteItems } from "../data";
import DoughnutChart from "./DoughnutChart";
const Frame = () => {
  const theme = useSelector((state) => state.theme);
  const [infoHover, setInfoHover] = useState(false);
  const [profileHover, setProfileHover] = useState(false);
  const todos = useSelector((state) => state.todos);

  const completedCount = todos.filter((todo) => todo.checked).length;
  const pendingCount = todos.filter((todo) => !todo.checked).length;

  return (
    <div className="flex flex-col w-[210px] lg:w-[280px] h-[800px] mt-10 px-4 items-center justify-start gap-[9px] relative bg-lightSideBarBg dark:bg-darkSideBarBg">
      <div
        className="relative cursor-pointer"
        onMouseLeave={() => setProfileHover(false)}
      >
        <img
          onClick={() => setProfileHover(true)}
          src={icons.profile}
          className="rounded-full -mt-10"
        />
        {profileHover && (
          <div className="absolute z-10 flex flex-col text-[16px] text-lightTextColor bg-lightSidebarChild text-lightTextColor w-32 px-1 rounded-md -translate-x-6 mt-1">
            {["Profile", "Logout"].map((item) => (
              <button
                key={item}
                className={`px-4 py-2 ${
                  item === "Profile" ? "border-b" : "border-t"
                } border-lightTextColor/10`}
              >
                <Link to={`/${item}`}>{item}</Link>
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="cursor-pointer relative w-fit font-medium text-lightTextColor dark:text-darkTextColor text-[15px] tracking-[0] leading-5 whitespace-nowrap">
        Hey, ABCD
      </div>
      <section className="flex flex-col w-full items-start relative flex-[0_0_auto]">
        <div className="flex flex-col items-start px-0 py-6 relative self-stretch w-full flex-[0_0_auto] bg-lightSidebarChild dark:bg-darkBgSecondary">
          {sideBarRouteItems.map((i) => (
            <div className="w-full" key={i.title}>
              <NavLink
                to={i.route}
                className={({ isActive }) =>
                  isActive
                    ? "rounded-lg flex items-center gap-4 px-4 py-2 relative self-stretch w-full flex-[0_0_auto] text-lightTextColor bg-greenDark/30 dark:text-darkSidebarItemActiveText dark:bg-darkSidebarItemActiveBg"
                    : "rounded-lg flex items-center gap-4 px-4 py-2 relative self-stretch w-full flex-[0_0_auto] text-lightTextColor bg-lightSidebarChild dark:bg-transparent dark:text-darkTextColor "
                }
              >
                <img
                  className="relative w-6 h-6"
                  alt="Menu"
                  src={theme === "dark" ? i.iconUrl.dark : i.iconUrl.light}
                />
                <div className="relative w-fit font-medium text-[15px] tracking-[0] leading-5 whitespace-nowrap">
                  {i.title}
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </section>
      <section className="py-6 bg-lightSidebarChild dark:bg-darkBgSecondary w-full h-fit">
        <div className="px-4 py-2 flex gap-4 items-center">
          <img src={theme === "dark" ? icons.sum.dark : icons.sum.light} />
          <span>Add List</span>
        </div>
      </section>
      <section className="bg-lightSidebarChild dark:bg-darkBgSecondary py-2 px-4 w-full">
        <div className="">
          <div className="flex items-center justify-between">
            <h3>Today Tasks</h3>
            <div
              className="cursor-pointer relative"
              onMouseOver={() => {
                setInfoHover(true);
              }}
              onMouseLeave={() => setInfoHover(false)}
            >
              <img src={icons.info} />
              {infoHover && (
                <div className="absolute text-[10px] text-lightSideBarBg bg-lightTextColor dark:bg-darkTextColor dark:text-darkGreenColor rounded-md w-24 p-[2px] px-1 -translate-y-[18px] translate-x-5">
                  Info About Tasks
                </div>
              )}
            </div>
          </div>
          <h2 className="text-2xl">{todos.length}</h2>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-8">
          <DoughnutChart
            completed={{
              title: "Pending",
              color: "#98E19B",
              count: completedCount ? completedCount : 0,
            }}
            pending={{
              title: "Done",
              color: "#357937",
              count: pendingCount ? pendingCount : 0,
            }}
          />
          <div className="flex gap-5">
            {[
              { title: "Pending", color: "bg-darkSidebarItemActiveText" },
              { title: "Done", color: "bg-greenLight" },
            ].map((i) => (
              <div key={i.title} className="flex items-center gap-1">
                <div className={`w-1.5 h-1.5 ${i.color} rounded-full`} />
                <div className="text-lightTextColor dark:text-darkTextColor text-[12px] font-normal">
                  {i.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Frame;
