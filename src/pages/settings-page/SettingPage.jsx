import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "../../components/sidebar/Sidebar";
import TopNav from "../../components/topnav/TopNav";
import ThemeAction from "../../redux/actions/ThemeAction";

const Layout = () => {
  const themeReducer = useSelector((state) => state.ThemeReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    const themeClass = localStorage.getItem("themeMode", "theme-mode-light");

    const colorClass = localStorage.getItem("colorMode", "theme-mode-light");

    dispatch(ThemeAction.setMode(themeClass));

    dispatch(ThemeAction.setColor(colorClass));
  }, [dispatch]);

  return (
    <Route
      render={(props) => (
        <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
          <Sidebar {...props} />
          <div className="layout__content">
            <TopNav />
            <div className="layout__content-main">
              <h1>this is setting page</h1>
            </div>
          </div>
        </div>
      )}
    />
  );
};

export default Layout;
