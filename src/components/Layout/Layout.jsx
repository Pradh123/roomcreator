import React, { useState, useEffect, useRef } from "react";
import SidebarContent from "./Sidebar"; // Ensure this component is created
import { useRouter } from "next/router";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell, faMessage } from "@fortawesome/free-solid-svg-icons";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMediumDevice, setIsMediumDevice] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const sidebarRef = useRef();
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    setIsMediumDevice(mediaQuery.matches);
    setSidebarOpen(mediaQuery.matches);

    const handleResize = () => {
      setIsMediumDevice(mediaQuery.matches);
      setSidebarOpen(mediaQuery.matches);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const pathSegments = router.asPath.split("/").filter((segment) => segment);
    const breadcrumbs = pathSegments.map((segment, index) => {
      const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
      return { segment, path };
    });
  }, [router.asPath]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !isMediumDevice
      ) {
        setSidebarOpen(false);
      }
    };

    if (sidebarOpen && !isMediumDevice) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarOpen, isMediumDevice]);

  useEffect(() => {
    const handleRouteChangeStart = () => setLoading(true);
    const handleRouteChangeComplete = () => setLoading(false);
    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    router.events.on("routeChangeError", handleRouteChangeComplete);
    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
      router.events.off("routeChangeError", handleRouteChangeComplete);
    };
  }, [router]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className="h-screen w-full flex overflow-hidden transition-all duration-300 ease-in-out">
      <div
        ref={sidebarRef}
        className={`bg-[#222E3C] fixed top-0 left-0 h-full overflow-y-auto transform transition-transform duration-300 ease-in-out z-40 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } ${
          isMediumDevice && "md:w-[210px] w-[40vw]"
        } md:w-[210px] w-[50vw] sm:w-[40vw]`}
      >
        <SidebarContent />
      </div>
      {/* header */}
      <div
        className={`flex-1  text-[14px] bg-slate-300 min-w-[320px] overflow-y-auto h-[100vh] transition-all duration-300 ease-in-out ${
          sidebarOpen ? "md:ml-[210px] ml-[40vw]" : "md:ml-0 ml-0"
        }`}
      >
        <div className="sticky top-0 z-30 shadow-md backdrop-blur-xl bg-white/80 py-3 px-4 flex items-center gap-5">
          <div className="cursor-pointer" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div className="flex justify-between w-full">
            <div></div>
            <div className="flex items-center gap-5">
              <FontAwesomeIcon icon={faBell} />
              <FontAwesomeIcon icon={faMessage} />
              <div className="flex items-center gap-3">
                <Image
                  className="hidden sm:block w-10 h-10 rounded-full"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="User"
                  width={320}
                  height={400}
                />
                <span className="text-sm font-semibold">Pradhumn</span>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className=" bg-gradient-to-r  p-4 ">
            {loading ? (
              <div className="flex justify-center items-center w-full h-full">
                <p>Loading...</p>
              </div>
            ) : (
              <div className="pt-2 z-30">{children}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
