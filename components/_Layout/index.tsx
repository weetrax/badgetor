import React from "react";
import { EditorProvider } from "../../providers/EditorProvider";
import Footer from "./Footer";
import Navbar from "./Navbar";

type _LayoutProps = {
  children: React.ReactNode;
};
const _Layout: React.FC<_LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-dark-500 text-white font-body">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default _Layout;
