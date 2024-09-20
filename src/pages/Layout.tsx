import { ReactNode } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/pages/Layout.scss";

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children}: LayoutProps) {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;