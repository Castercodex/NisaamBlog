import Nav from "./Nav";
// import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};

export default Layout;
