import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  faSliders,
  faHotel,
  faRightFromBracket,
  faUser,
  faPassport,
  faOtter,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";
import { IoIosArrowDown } from "react-icons/io";
const Sidebar = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(null);
  const [selectedSubMenu, setSelectedSubMenu] = useState(null);
  const sidebarTabs = useMemo(
    () => [
      {
        label: "Dashboard",
        icon: () => <FontAwesomeIcon icon={faSliders} />,
        href: "/admin",
      },
      {
        label: "Others",
        icon: () => <FontAwesomeIcon icon={faOtter} />,
        href: "/admin/others",
      },
      {
        label: "Amenities",
        icon: () => <FontAwesomeIcon icon={faChartSimple} />,
        href: "/admin/amenities",
      },
      {
        label: "Profile",
        icon: () => <FontAwesomeIcon icon={faUser} />,
        href: "/admin/profile",
      },

      {
        label: "All Users",
        icon: () => <FontAwesomeIcon icon={faAddressBook} />,
        href: "/admin/all-users",
      },
      {
        label: "All Rooms",
        icon: () => <FontAwesomeIcon icon={faHotel} />,
        subMenu: [
          { label: "Create Room", href: "/admin/room/create-room" },
          { label: "Room List", href: "/admin/room" },
        ],
      },
      {
        label: "Room",
        icon: () => <FontAwesomeIcon icon={faHotel} />,
        subMenu: [
          { label: "Create Room", href: "/admin/room/create-room" },
          { label: "Room List", href: "/admin/room/list-room" },
        ],
      },
      {
        label: "Change Password",
        icon: () => <FontAwesomeIcon icon={faPassport} />,
        href: "/admin/change-password",
      },
    ],
    []
  );
  useEffect(() => {
    sidebarTabs.forEach((tab) => {
      if (tab.subMenu) {
        tab.subMenu.forEach((subMenu) => {
          if (router.pathname === subMenu.href) {
            setActiveTab(tab.label);
            setSelectedSubMenu(subMenu.label);
          }
        });
      } else if (router.pathname === tab.href) {
        setActiveTab(tab.label);
      }
    });
  }, [router.pathname, sidebarTabs]);
  const handleTabToggle = (tabName) => {
    setActiveTab((prevTab) => (prevTab === tabName ? null : tabName));
    setSelectedSubMenu(null);
  };
  const handleSubMenuClick = (subMenuLabel, parentLabel) => {
    setSelectedSubMenu(subMenuLabel);
    setActiveTab(parentLabel);
  };

  const renderSubMenu = (items, parentLabel) => {
    return (
      <div
        className={`pl-4 my-2 py-2 text-para bg-slate-50 rounded-md text-black ${
          activeTab === parentLabel ? "block" : "hidden"
        }`}
      >
        {items.map((item, index) => (
          <a href={item.href} key={index}>
            <p
              onClick={() => handleSubMenuClick(item.label, parentLabel)}
              className={`text-[12px] cursor-pointer hover:underline hover:font-semibold hover:text-orange-500 ${
                selectedSubMenu === item.label ? "text-green-500 " : ""
              }`}
            >
              {item.label}
            </p>
          </a>
        ))}
      </div>
    );
  };

  return (
    <div className="text-[14px] text-[#f5f7fb] font-sans p-4 md:w-full">
      <div className="flex flex-col gap-5">
        <div className=" border-b border-b-white">
          <Image
            className="w-20 h-20 rounded-full mb-2 mx-auto"
            src={"/assets/logo1.png"}
            alt="User"
            width={100}
            height={100}
          />
        </div>
        {sidebarTabs.map((tab, index) => (
          <div key={index} className="relative group">
            {tab.subMenu ? (
              <div
                onClick={() => handleTabToggle(tab.label)}
                className={`flex justify-between items-center cursor-pointer ${
                  activeTab === tab.label ? "text-green-500 font-semibold" : ""
                } group-hover:text-orange-500`}
              >
                <div className="flex items-center gap-2">
                  <tab.icon size={20} />{" "}
                  {/* Use the icon component correctly */}
                  <p className="cursor-pointer">{tab.label}</p>
                </div>
                <div>
                  <IoIosArrowDown
                    className={`transition-transform duration-200 ${
                      activeTab === tab.label ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </div>
            ) : (
              <Link href={tab.href}>
                <div
                  className={`flex items-center gap-2 ${
                    activeTab === tab.label
                      ? "text-green-500 font-semibold"
                      : ""
                  } hover:text-orange-500`}
                >
                  <tab.icon size={20} />{" "}
                  {/* Use the icon component correctly */}
                  <p className="cursor-pointer">{tab.label}</p>
                </div>
              </Link>
            )}
            {tab.subMenu && (
              <div
                className={` left-0 w-full group-hover:block ${
                  activeTab === tab.label ? "block" : "hidden"
                }`}
              >
                {renderSubMenu(tab.subMenu, tab.label)}
              </div>
            )}
          </div>
        ))}
        <div
          className={`flex items-center gap-2 ${
            activeTab === "Logout" ? "text-green-500 font-semibold" : ""
          } hover:text-orange-500`}
        >
          <FontAwesomeIcon icon={faRightFromBracket} size={20} />{" "}
          {/* Use the icon component correctly */}
          <p className="cursor-pointer">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
