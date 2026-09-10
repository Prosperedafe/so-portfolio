import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";
import ScrollToTop from "./scroll-to-top";
import { BackToTop } from "./back-to-top";

export const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <BackToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
