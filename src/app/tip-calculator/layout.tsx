import React from "react";
import styles from "./layout.module.css";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full flex justify-center items-center min-h-screen bg-grey-200">
      <div className="p-5 flex  w-full ">{children}</div>
    </div>
  );
};

export default Layout;
