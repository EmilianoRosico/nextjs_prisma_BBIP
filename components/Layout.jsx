import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="fullScreen">{children}</main>
      <Footer />
      <style jsx>
          {`
          .fullScreen{
            min-height: 60vh;
          }
          `}
      </style>
    </>
  );
}

export default Layout;
