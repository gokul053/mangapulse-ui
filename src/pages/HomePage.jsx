import { Outlet } from "react-router-dom";

const Homepage = () => {
  return (
    <>
        <p>Hello World</p>
        <Outlet />
    </>
  );
};

export default Homepage;
