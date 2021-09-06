import Navbar from "./Navbar";

const MainLayout = ({ children }) =>
  <div>
    <Navbar />
    {children}
  </div>;

export default MainLayout;